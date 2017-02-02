import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const fs = require('fs')
const route = require('koa-route')

function* index() {
  this.body = fs.readFileSync(path.resolve(path.join('build', 'index.html')), 'utf8')
}

app.use(route.get('*', index))
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
