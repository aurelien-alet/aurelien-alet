import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import profilePicture from '../img/header/profile-picture.png';

/**
 * Object containing the css properties for the header components
 */
let styles = theme => ({
    avatar: {
		[theme.breakpoints.down('sm')]: {
			width: 200,
        	height: 200,
		},
		[theme.breakpoints.up('sm')]: {
        	width: 300,
        	height: 300,
		},
		[theme.breakpoints.up('xl')]: {
        	width: 400,
        	height: 400,
		},
    }, 

    titles: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 1*theme.spacing.unit,
		paddingLeft: 3*theme.spacing.unit,
		paddingRight: 3*theme.spacing.unit,
		marginBottom: 2*theme.spacing.unit,
    },
    headerBar: {
		minHeight: 530,
		backgroundColor: 'black',
		padding: 1*theme.spacing.unit,
    },
    gridContainer: {
        height: '100%',
    },
	button: {
		textTransform: 'none',
		width: '100%',
	},
	whiteText: {
		color: 'white',
	}
});

/**
 * Contains the menu items which, when clicked, scroll to the
 * corresponding page section
 */
class Menu extends React.Component {

	/**
	 * Constructor of the component
	 * @param {props} props passed from the parent component
	 */
	constructor(props) {
		super(props);
		this.buttonClass = props.buttonClass
	}

	/**
	 * Method used to render the component HTML
	 * @return {JSXobject} the html to render
	 */
	render() {
		return(
			<Grid container spacing={8} alignItems='center' justify='center'>
				<Grid item sm={3} xs={5}>
					<Button onClick={(e) => this.props.handleMenuClick(e, 'skills')} className={this.buttonClass} variant='outlined' color='primary'>Compétences</Button>
				</Grid>
				<Grid item sm={3} xs={5}>
					<Button onClick={(e) => this.props.handleMenuClick(e, 'experiences')} className={this.buttonClass} variant='outlined' color='primary'>Expériences</Button>
				</Grid>
				<Grid item sm={3} xs={5}>
					<Button onClick={(e) => this.props.handleMenuClick(e, 'schools')} className={this.buttonClass} variant='outlined' color='primary'>Formation</Button>
				</Grid>
				<Grid item sm={3} xs={5}>
					<Button onClick={(e) => this.props.handleMenuClick(e, 'contact')} className={this.buttonClass} variant='outlined' color='primary'>Me contacter</Button>
				</Grid>				
			</Grid>
		);
	}	
	
}

/**
 * Displays the round profile picture in the header bar
 * @param {object} props properties passed from the parent component
 */
const ProfilePicture = props => {
    const {avatarClass} = props;
    return(
        <Grid item>
            <Avatar alt='Aurélien Alet' src={profilePicture} className={avatarClass} />
        </Grid>
    );
};

/**
 * Display name and a succint activity presentation
 * @param {object} props properties passed from the parent component
 */
const Titles = props => {
    const {titlesClass, whiteTextClass} = props;
    return(
        <Grid className={titlesClass} item>
            <Typography variant='h2' className={whiteTextClass} align='center' gutterBottom>
                Aurélien Alet
            </Typography>
            <Typography variant='subtitle1' className={whiteTextClass} align='center' gutterBottom>
                Ingénieur en développement web pour la société SII Bordeaux
            </Typography>
        </Grid>
    );
};

/**
 * Main component for the website header
 * Contains an event listener to keep the header height at the same height than windows
 */
class Header extends  React.Component {
	
	/**
	 * constructor of the component
	 * Initiates a states with the actual height of the window
	 * @param {object} props properties passed from the parent component
	 */
	constructor(props) {
		super(props);
		this.state = {
			windowHeight: window.innerHeight,
		};
		this.updateDimensions = this.updateDimensions.bind(this);
	}
	
	/**
	 * Updates the height of the header bar
	 * This method is called when the browser window is resized
	 */
	updateDimensions() {
		this.setState({
			windowHeight: window.innerHeight,
		});
	}

	/**
	 * Method called on component loading
	 * Used to update header bar height on loading
	 */
	componentWillMount() {
        this.updateDimensions();
    }

	/**
	 * Method called when the component is fully loaded
	 * Adds un event listener on windows resizing
	 */
    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
    }

	/**
	 * Method called to render the component HTML
	 */
	render() {
		const classes = this.props.classes;
		const handleMenuClick = this.props.handleMenuClick;
		const windowHeight = this.state.windowHeight;
    	return(
        	<div className={classes.headerBar} style={{height: windowHeight}}>
        	    <Grid container justify='space-evenly' alignItems='center' className={classes.gridContainer}>
					<Grid item>
        	        	<ProfilePicture avatarClass={classes.avatar} />
					</Grid>
					<Grid item>				
						<Grid container direction='column' alignItems='center'>
        	        		<Titles titlesClass={classes.titles} whiteTextClass={classes.whiteText} />				
							<Menu 
								handleMenuClick={handleMenuClick}
								buttonClass={classes.button}
							/>
						</Grid>
					</Grid>
        	    </Grid>
        	</div>
    	);
	}
};

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
