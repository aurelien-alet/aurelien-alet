import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './header/header';
import Experiences from './experiences/experiences';

const App = () => {
    return(
        <React.Fragment>
            <CssBaseline />
            <Header />
            <Experiences />
        </React.Fragment>
    );
}

ReactDOM.render(
    <div>
        <App />
    </div>,
    document.getElementById('root')
);