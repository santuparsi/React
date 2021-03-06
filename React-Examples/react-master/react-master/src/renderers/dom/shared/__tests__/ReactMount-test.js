/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @emails react-core
 */

'use strict';

const ReactDOMFeatureFlags = require('ReactDOMFeatureFlags');
const {COMMENT_NODE} = require('HTMLNodeType');

const invariant = require('invariant');

var React;
var ReactDOM;
var ReactDOMServer;
var ReactTestUtils;
var WebComponents;

describe('ReactMount', () => {
  beforeEach(() => {
    jest.resetModules();

    React = require('react');
    ReactDOM = require('react-dom');
    ReactDOMServer = require('react-dom/server');
    ReactTestUtils = require('react-dom/test-utils');

    try {
      if (WebComponents === undefined && typeof jest !== 'undefined') {
        WebComponents = require('WebComponents');
      }
    } catch (e) {
      // Parse error expected on engines that don't support setters
      // or otherwise aren't supportable by the polyfill.
      // Leave WebComponents undefined.
    }
  });

  describe('unmountComponentAtNode', () => {
    it('throws when given a non-node', () => {
      var nodeArray = document.getElementsByTagName('div');
      expect(function() {
        ReactDOM.unmountComponentAtNode(nodeArray);
      }).toThrowError(
        'unmountComponentAtNode(...): Target container is not a DOM element.',
      );
    });

    it('returns false on non-React containers', () => {
      var d = document.createElement('div');
      d.innerHTML = '<b>hellooo</b>';
      expect(ReactDOM.unmountComponentAtNode(d)).toBe(false);
      expect(d.textContent).toBe('hellooo');
    });

    it('returns true on React containers', () => {
      var d = document.createElement('div');
      ReactDOM.render(<b>hellooo</b>, d);
      expect(d.textContent).toBe('hellooo');
      expect(ReactDOM.unmountComponentAtNode(d)).toBe(true);
      expect(d.textContent).toBe('');
    });
  });

  it('throws when given a string', () => {
    expect(function() {
      ReactTestUtils.renderIntoDocument('div');
    }).toThrowError(
      'ReactDOM.render(): Invalid component element. Instead of passing a ' +
        "string like 'div', pass React.createElement('div') or <div />.",
    );
  });

  it('throws when given a factory', () => {
    class Component extends React.Component {
      render() {
        return <div />;
      }
    }

    expect(function() {
      ReactTestUtils.renderIntoDocument(Component);
    }).toThrowError(
      'ReactDOM.render(): Invalid component element. Instead of passing a ' +
        'class like Foo, pass React.createElement(Foo) or <Foo />.',
    );
  });

  it('should render different components in same root', () => {
    var container = document.createElement('container');
    document.body.appendChild(container);

    ReactDOM.render(<div />, container);
    expect(container.firstChild.nodeName).toBe('DIV');

    ReactDOM.render(<span />, container);
    expect(container.firstChild.nodeName).toBe('SPAN');
  });

  it('should unmount and remount if the key changes', () => {
    var container = document.createElement('container');

    var mockMount = jest.fn();
    var mockUnmount = jest.fn();

    class Component extends React.Component {
      componentDidMount = mockMount;
      componentWillUnmount = mockUnmount;
      render() {
        return <span>{this.props.text}</span>;
      }
    }

    expect(mockMount.mock.calls.length).toBe(0);
    expect(mockUnmount.mock.calls.length).toBe(0);

    ReactDOM.render(<Component text="orange" key="A" />, container);
    expect(container.firstChild.innerHTML).toBe('orange');
    expect(mockMount.mock.calls.length).toBe(1);
    expect(mockUnmount.mock.calls.length).toBe(0);

    // If we change the key, the component is unmounted and remounted
    ReactDOM.render(<Component text="green" key="B" />, container);
    expect(container.firstChild.innerHTML).toBe('green');
    expect(mockMount.mock.calls.length).toBe(2);
    expect(mockUnmount.mock.calls.length).toBe(1);

    // But if we don't change the key, the component instance is reused
    ReactDOM.render(<Component text="blue" key="B" />, container);
    expect(container.firstChild.innerHTML).toBe('blue');
    expect(mockMount.mock.calls.length).toBe(2);
    expect(mockUnmount.mock.calls.length).toBe(1);
  });

  it('should reuse markup if rendering to the same target twice', () => {
    var container = document.createElement('container');
    var instance1 = ReactDOM.render(<div />, container);
    var instance2 = ReactDOM.render(<div />, container);

    expect(instance1 === instance2).toBe(true);
  });

  it('should warn if mounting into left padded rendered markup', () => {
    var container = document.createElement('container');
    container.innerHTML = ReactDOMServer.renderToString(<div />) + ' ';

    spyOn(console, 'error');
    if (ReactDOMFeatureFlags.useFiber) {
      ReactDOM.hydrate(<div />, container);
    } else {
      ReactDOM.render(<div />, container);
    }
    expectDev(console.error.calls.count()).toBe(1);
    if (ReactDOMFeatureFlags.useFiber) {
      expectDev(console.error.calls.argsFor(0)[0]).toContain(
        'Did not expect server HTML to contain the text node " " in <container>.',
      );
    } else {
      expectDev(console.error.calls.argsFor(0)[0]).toContain(
        'Target node has markup rendered by React, but there are unrelated nodes as well.',
      );
    }
  });

  it('should warn if mounting into right padded rendered markup', () => {
    var container = document.createElement('container');
    container.innerHTML = ' ' + ReactDOMServer.renderToString(<div />);

    spyOn(console, 'error');
    if (ReactDOMFeatureFlags.useFiber) {
      ReactDOM.hydrate(<div />, container);
    } else {
      ReactDOM.render(<div />, container);
    }
    expectDev(console.error.calls.count()).toBe(1);
    if (ReactDOMFeatureFlags.useFiber) {
      expectDev(console.error.calls.argsFor(0)[0]).toContain(
        'Did not expect server HTML to contain the text node " " in <container>.',
      );
    } else {
      expectDev(console.error.calls.argsFor(0)[0]).toContain(
        'Target node has markup rendered by React, but there are unrelated nodes as well.',
      );
    }
  });

  it('should not warn if mounting into non-empty node', () => {
    var container = document.createElement('container');
    container.innerHTML = '<div></div>';

    spyOn(console, 'error');
    ReactDOM.render(<div />, container);
    expectDev(console.error.calls.count()).toBe(0);
  });

  it('should warn when mounting into document.body', () => {
    var iFrame = document.createElement('iframe');
    document.body.appendChild(iFrame);
    spyOn(console, 'error');

    ReactDOM.render(<div />, iFrame.contentDocument.body);

    expectDev(console.error.calls.count()).toBe(1);
    expectDev(console.error.calls.argsFor(0)[0]).toContain(
      'Rendering components directly into document.body is discouraged',
    );
  });

  it('should account for escaping on a checksum mismatch', () => {
    var div = document.createElement('div');
    var markup = ReactDOMServer.renderToString(
      <div>This markup contains an nbsp entity: &nbsp; server text</div>,
    );
    div.innerHTML = markup;

    spyOn(console, 'error');
    if (ReactDOMFeatureFlags.useFiber) {
      ReactDOM.hydrate(
        <div>This markup contains an nbsp entity: &nbsp; client text</div>,
        div,
      );
    } else {
      ReactDOM.render(
        <div>This markup contains an nbsp entity: &nbsp; client text</div>,
        div,
      );
    }
    expectDev(console.error.calls.count()).toBe(1);
    if (ReactDOMFeatureFlags.useFiber) {
      expectDev(console.error.calls.argsFor(0)[0]).toContain(
        'Server: "This markup contains an nbsp entity: ?? server text" ' +
          'Client: "This markup contains an nbsp entity: ?? client text"',
      );
    } else {
      expectDev(console.error.calls.argsFor(0)[0]).toContain(
        ' (client) nbsp entity: &nbsp; client text</div>\n' +
          ' (server) nbsp entity: &nbsp; server text</div>',
      );
    }
  });

  if (WebComponents !== undefined) {
    it('should allow mounting/unmounting to document fragment container', () => {
      var shadowRoot;
      var proto = Object.create(HTMLElement.prototype, {
        createdCallback: {
          value: function() {
            shadowRoot = this.createShadowRoot();
            ReactDOM.render(<div>Hi, from within a WC!</div>, shadowRoot);
            expect(shadowRoot.firstChild.tagName).toBe('DIV');
            ReactDOM.render(<span>Hi, from within a WC!</span>, shadowRoot);
            expect(shadowRoot.firstChild.tagName).toBe('SPAN');
          },
        },
      });
      proto.unmount = function() {
        ReactDOM.unmountComponentAtNode(shadowRoot);
      };
      document.registerElement('x-foo', {prototype: proto});
      var element = document.createElement('x-foo');
      element.unmount();
    });
  }

  it('should warn if render removes React-rendered children', () => {
    var container = document.createElement('container');

    class Component extends React.Component {
      render() {
        return <div><div /></div>;
      }
    }

    ReactDOM.render(<Component />, container);

    // Test that blasting away children throws a warning
    spyOn(console, 'error');
    var rootNode = container.firstChild;
    ReactDOM.render(<span />, rootNode);
    expectDev(console.error.calls.count()).toBe(1);
    expectDev(console.error.calls.argsFor(0)[0]).toBe(
      'Warning: render(...): Replacing React-rendered children with a new ' +
        'root component. If you intended to update the children of this node, ' +
        'you should instead have the existing children update their state and ' +
        'render the new components instead of calling ReactDOM.render.',
    );
  });

  it('should warn if the unmounted node was rendered by another copy of React', () => {
    jest.resetModules();
    var ReactDOMOther = require('react-dom');
    var container = document.createElement('div');

    class Component extends React.Component {
      render() {
        return <div><div /></div>;
      }
    }

    ReactDOM.render(<Component />, container);
    // Make sure ReactDOM and ReactDOMOther are different copies
    expect(ReactDOM).not.toEqual(ReactDOMOther);

    spyOn(console, 'error');
    ReactDOMOther.unmountComponentAtNode(container);
    expectDev(console.error.calls.count()).toBe(1);
    expectDev(console.error.calls.argsFor(0)[0]).toBe(
      "Warning: unmountComponentAtNode(): The node you're attempting to unmount " +
        'was rendered by another copy of React.',
    );

    // Don't throw a warning if the correct React copy unmounts the node
    ReactDOM.unmountComponentAtNode(container);
    expectDev(console.error.calls.count()).toBe(1);
  });

  it('passes the correct callback context', () => {
    var container = document.createElement('div');
    var calls = 0;

    ReactDOM.render(<div />, container, function() {
      expect(this.nodeName).toBe('DIV');
      calls++;
    });

    // Update, no type change
    ReactDOM.render(<div />, container, function() {
      expect(this.nodeName).toBe('DIV');
      calls++;
    });

    // Update, type change
    ReactDOM.render(<span />, container, function() {
      expect(this.nodeName).toBe('SPAN');
      calls++;
    });

    // Batched update, no type change
    ReactDOM.unstable_batchedUpdates(function() {
      ReactDOM.render(<span />, container, function() {
        expect(this.nodeName).toBe('SPAN');
        calls++;
      });
    });

    // Batched update, type change
    ReactDOM.unstable_batchedUpdates(function() {
      ReactDOM.render(<article />, container, function() {
        expect(this.nodeName).toBe('ARTICLE');
        calls++;
      });
    });

    expect(calls).toBe(5);
  });

  it('initial mount is sync inside batchedUpdates, but task work is deferred until the end of the batch', () => {
    var container1 = document.createElement('div');
    var container2 = document.createElement('div');

    class Foo extends React.Component {
      state = {active: false};
      componentDidMount() {
        this.setState({active: true});
      }
      render() {
        return (
          <div>{this.props.children + (this.state.active ? '!' : '')}</div>
        );
      }
    }

    ReactDOM.render(<div>1</div>, container1);

    ReactDOM.unstable_batchedUpdates(() => {
      // Update. Does not flush yet.
      ReactDOM.render(<div>2</div>, container1);
      expect(container1.textContent).toEqual('1');

      // Initial mount on another root. Should flush immediately.
      ReactDOM.render(<Foo>a</Foo>, container2);
      // The update did not flush yet.
      expect(container1.textContent).toEqual('1');
      // The initial mount flushed, but not the update scheduled in cDU.
      expect(container2.textContent).toEqual('a');
    });
    // All updates have flushed.
    expect(container1.textContent).toEqual('2');
    expect(container2.textContent).toEqual('a!');
  });

  if (ReactDOMFeatureFlags.useFiber) {
    describe('mount point is a comment node', () => {
      let containerDiv;
      let mountPoint;

      beforeEach(() => {
        const ReactFeatureFlags = require('ReactFeatureFlags');
        ReactFeatureFlags.disableNewFiberFeatures = false;

        containerDiv = document.createElement('div');
        containerDiv.innerHTML = 'A<!-- react-mount-point-unstable -->B';
        mountPoint = containerDiv.childNodes[1];
        invariant(mountPoint.nodeType === COMMENT_NODE, 'Expected comment');
      });

      it('renders at a comment node', () => {
        function Char(props) {
          return props.children;
        }
        function list(chars) {
          return chars.split('').map(c => <Char key={c}>{c}</Char>);
        }

        ReactDOM.render(list('aeiou'), mountPoint);
        expect(containerDiv.innerHTML).toBe(
          'Aaeiou<!-- react-mount-point-unstable -->B',
        );

        ReactDOM.render(list('yea'), mountPoint);
        expect(containerDiv.innerHTML).toBe(
          'Ayea<!-- react-mount-point-unstable -->B',
        );

        ReactDOM.render(list(''), mountPoint);
        expect(containerDiv.innerHTML).toBe(
          'A<!-- react-mount-point-unstable -->B',
        );
      });
    });
  }
});
