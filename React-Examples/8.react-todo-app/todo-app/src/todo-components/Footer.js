import React, { Component,PropTypes} from 'react';
import classnames from 'classnames';

import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED,SHOW_TODAY } from '../constants/todo-filters';


const FILTER_TITLES = {
    [SHOW_ALL]: 'All',
    [SHOW_ACTIVE]: 'Active',
    [SHOW_COMPLETED]: 'Completed',
    [SHOW_TODAY]:'Today'
};

class Footer extends Component {

    renderTodoCount() {
        let { activeCount } = this.props;
        let itemWord = activeCount === 1 ? 'item' : 'items';
        return (
            <span className="todo-count">
                <strong>{activeCount||'No'}</strong> {itemWord} left
            </span>
        );
    }

    renderFilterLink(filter) {
        const title = FILTER_TITLES[filter];
        const { onShow,filter:selectedFilter} = this.props;
        return (
            <a className={classnames({ selected: filter === selectedFilter })}
                style={{cursor:'pointer'}}    
                onClick={() => onShow(filter)}>
                {title}
            </a>
        );
    }

    render() {

        let {onClearCompleted} = this.props;

        return (
            <footer className="footer">
                {this.renderTodoCount()}
                <ul className="filters">
                    {[SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED,SHOW_TODAY].map((filter,idx) =>
                        <li key={idx}>
                            {this.renderFilterLink(filter)}
                        </li>    
                    )}
                </ul>
                <button className="clear-completed" onClick={onClearCompleted}>Clear Completed</button>
            </footer>
        );
    }
}


Footer.propTypes = {
    onClearCompleted: PropTypes.func.isRequired,
    activeCount: PropTypes.number,
    onShow: PropTypes.func,
    filter:PropTypes.string
}

export default Footer;