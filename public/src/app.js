import React from 'react';
import ReactDOM from 'react-dom';
import LearnReact from './components-new/LearnReact';
import 'normalize.css/normalize.css';
import './styles/style.scss';








ReactDOM.render(<LearnReact options={["devils den", "district 13"]} />, document.getElementById('app'));