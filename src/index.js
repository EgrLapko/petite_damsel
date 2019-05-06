import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import {ProductProvider} from './context';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<ProductProvider>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</ProductProvider>
 , document.getElementById('root'));

serviceWorker.unregister();
