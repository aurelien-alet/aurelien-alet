import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
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
});

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
    const {classes} = props;
    console.log(window.innerHeight);
    return(
        <Paper className={classes.paper} >
            <Grid container justify='space-evenly' alignItems='center' className={classes.gridContainer}>
                <ProfilePicture avatarClass={classes.avatar} />
                <Titles titlesClass={classes.titles} />
            </Grid>
        </Paper>
    );
};

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);