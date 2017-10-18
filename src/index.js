import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './app/App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import resumeApp from './reducers';
import registerServiceWorker from './app/registerServiceWorker';

let store = createStore(resumeApp);

ReactDOM.render((
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
), document.getElementById('root'));
registerServiceWorker();
