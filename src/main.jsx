import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/App';
import './index.scss';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { CustomCursor } from './components'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <CustomCursor />
            <App />
        </Provider>
    </React.StrictMode>,
);
