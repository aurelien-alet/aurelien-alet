import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import profilePicture from './profile-picture.png';

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
    },
    gridContainer: {
        height: '100%',
    },
	button: {
		textTransform: 'none',
		margin: theme.spacing.unit/2,
	}
});

class Menu extends React.Component {

	constructor(props) {
		super(props);
		this.buttonClass = props.buttonClass
	}


	render() {
		return(
			<div>
				<Button onClick={(e) => this.props.handleMenuClick(e, 'skills')} className={this.buttonClass} variant='outlined'>Compétences</Button>
				<Button onClick={(e) => this.props.handleMenuClick(e, 'experiences')} className={this.buttonClass} variant='outlined'>Expériences</Button>
				<Button onClick={(e) => this.props.handleMenuClick(e, 'schools')} className={this.buttonClass} variant='outlined'>Formation</Button>
				<Button onClick={(e) => this.props.handleMenuClick(e, 'contact')} className={this.buttonClass} variant='outlined'>Me contacter</Button>
			</div>
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
    const {titlesClass} = props;
    return(
        <Grid className={titlesClass} item>
            <Typography variant='h2' align='center' gutterBottom>
                Aurélien Alet
            </Typography>
            <Typography variant='subtitle1' align='center' gutterBottom>
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
                		<Titles titlesClass={classes.titles} />				
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
