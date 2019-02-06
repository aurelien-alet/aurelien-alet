import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './header/header';
import ExperiencesList from './experiences/experiences';
import SchoolsList from './learning/learning';
import Skills from './skills/skills';

const App = () => {
    return(
        <React.Fragment>
            <CssBaseline />
            <Header />
			<Skills />
            <ExperiencesList />
            <SchoolsList />
        </React.Fragment>
    );
}

ReactDOM.render(
    <div>
        <App />
    </div>,
    document.getElementById('root')
);
