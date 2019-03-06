import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './header/header';
import ExperiencesList from './experiences/experiences';
import SchoolsList from './learning/learning';
import Skills from './skills/skills';
import Footer from './footer/footer';
import './index.css';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors'

const theme = createMuiTheme({
	palette: {
    	primary: blue,
	},
});

class App extends React.Component {
	
	constructor(props) {
		super(props);
		this.handleMenuClick = this.handleMenuClick.bind(this);
	}

	handleMenuClick(event, section) {
		let scrollPosition = 0;
		console.log(window.scrollY)
		switch(section) {
			case 'skills':
				console.log(ReactDOM.findDOMNode(this.refs.SkillsRef).getBoundingClientRect());
				scrollPosition = ReactDOM.findDOMNode(this.refs.SkillsRef).getBoundingClientRect().top;
				break;
			case 'experiences':
				scrollPosition = ReactDOM.findDOMNode(this.refs.ExperiencesListRef).getBoundingClientRect().top;
				break;
			case 'schools':
				scrollPosition = ReactDOM.findDOMNode(this.refs.SchoolsListRef).getBoundingClientRect().top;
				break;
			case 'contact':
				scrollPosition = ReactDOM.findDOMNode(this.refs.FooterRef).getBoundingClientRect().top;
				break;		
		}
		console.log(scrollPosition);
		window.scroll(0, window.scrollY + scrollPosition);
	}

	render() {
		return(
    	    <React.Fragment >
    	        <CssBaseline />
    	        <Header 
					handleMenuClick={this.handleMenuClick}
				/>
				<Skills ref='SkillsRef'/>
    	        <ExperiencesList ref='ExperiencesListRef'/>
    	        <SchoolsList ref='SchoolsListRef'/>
				<Footer ref='FooterRef'/>
    	    </React.Fragment>
    	);
	}
}

const scrollStyle = {
	scrollBehavior: 'smooth',
}

ReactDOM.render(
	<MuiThemeProvider theme={theme}>
		<App />
	</MuiThemeProvider>,
    document.getElementById('root')
);

