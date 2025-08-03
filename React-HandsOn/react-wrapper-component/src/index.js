import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Card from './Card';
import reportWebVitals from './reportWebVitals';
import Container from './Container';
import Layout from './Layout';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Card>
      <h1>Hello, World!</h1>
      <p>This is inside a card wrapper.</p>
    </Card>
    <Container padding="40px">
      <h2>Content with custom padding</h2>
    </Container> */}
    <Layout
      header={<h1>Header Content</h1>}
      footer={<p>Footer Content</p>}
    >
      <p>Main content goes here.</p>
    </Layout>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
