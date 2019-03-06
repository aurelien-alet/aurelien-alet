import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import profilePicture from './profile-picture.png';
import blueGrey from '@material-ui/core/colors/blueGrey';
import grey from '@material-ui/core/colors/grey';

const styles = theme => ({
    avatar: {
        width: 300,
        height: 300,
    }, 
    titles: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 3*theme.spacing.unit,
    },
    paper: {
        height: window.innerHeight,
		backgroundColor: 'black',
    },
    gridContainer: {
        height: '100%',
    },
	button: {
		textTransform: 'none',
		width: '100%',
		// color: 'white',
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

const ProfilePicture = props => {
    const {avatarClass} = props;
    return(
        <Grid item>
            <Avatar alt='Aurélien Alet' src={profilePicture} className={avatarClass} />
        </Grid>
    );
};

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

const Header = props => {
    const {classes, handleMenuClick} = props;
    return(
        <Paper className={classes.paper} >
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
        </Paper>
    );
};

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
