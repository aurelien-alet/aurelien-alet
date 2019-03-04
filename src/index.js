import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './header/header';
import ExperiencesList from './experiences/experiences';
import SchoolsList from './learning/learning';
import Skills from './skills/skills';
import Footer from './footer/footer';

class App extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			schoolsListTop: 0,
		};
	}

	componentDidMount() {

		const tmp = ReactDOM.findDOMNode(this.refs.SchoolsListRef).getBoundingClientRect();
		console.log(tmp);
	
		const { top:schoolsListTop } = ReactDOM.findDOMNode(this.refs.SchoolsListRef).getBoundingClientRect();
		this.setState({
			schoolsListTop: schoolsListTop,
		});		
		console.log(schoolsListTop);
		
	}

	render() {
		const { schoolsListTop } = this.state;
		return(
    	    <React.Fragment >
    	        <CssBaseline />
    	        <Header 
					schoolsListTop={schoolsListTop}	
				/>
				<Skills />
    	        <ExperiencesList />
    	        <SchoolsList ref='SchoolsListRef'/>
				<Footer />
    	    </React.Fragment>
    	);
	}
}

ReactDOM.render(
    <div>
        <App />
    </div>,
    document.getElementById('root')
);

