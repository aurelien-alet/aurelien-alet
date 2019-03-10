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

/**
 * Object containing the theme for the website
 */
const theme = createMuiTheme({
	palette: {
    	primary: blue,
	},
});

/**
 * Main component of the app, displaying the header, the skills, the experiences, the schools
 * and the footer
 */
class App extends React.Component {
	
	/**
	 * Constructor of the component
	 * @param {object} props properties passed from the parent component
	 */
	constructor(props) {
		super(props);
		this.handleMenuClick = this.handleMenuClick.bind(this);
	}

	/**
	 * Method called when the component is fully loaded
	 * Defines the title of the app
	 */
	componentDidMount(){
	    document.title = "Aurélien Alet"
	}

	/**
	 * When an item is clicked on the menu, scrools the website to the section 
	 * corresponding to the selection
	 * @param {*} event click event 
	 * @param {string} section section of the application to scroll to
	 */
	handleMenuClick(event, section) {
		let scrollPosition = 0;
		switch(section) {
			case 'skills':
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
			default:
				scrollPosition = 0;
				break;	
		}
		window.scroll(0, window.scrollY + scrollPosition);
	}

	/**
	 * Renders the webpage
	 */
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

ReactDOM.render(
	<MuiThemeProvider theme={theme}>
		<App />
	</MuiThemeProvider>,
    document.getElementById('root')
);

