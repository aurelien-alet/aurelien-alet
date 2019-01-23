import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

const styles = theme => ({
    paper: {
        width: 400,
        maxWidth: '100%',
        padding: 2*theme.spacing.unit,
    },
    experiences: {
        padding: 3*theme.spacing.unit,
    },
    avatar: {
        marginLeft: theme.spacing.unit,
    },
});

const Header = props => {
    const {avatarClass} = props;
    return(
        <Grid container justify='flex-end'>
            <Grid item>
                <a title='test'>
                    <Avatar className={avatarClass}>PY</Avatar>
                </a>
                
            </Grid>
            <Grid item>
                <Avatar className={avatarClass}>AN</Avatar>
            </Grid>
        </Grid>
    );
};

const Title = props => {
    return(
        <Typography variant='h6'>
            Chatbot pour la société SII
        </Typography>
    );
};

const Date = props =>{
    return(
        <Typography variant='body2'>
            De février 2018 à juillet 2018
        </Typography>
    );
}

const Content = props => {
    return(
        <Typography variant='body1'>
            Développement d'un Chatbot pour la société SII
        </Typography>
    );
};

const Experiences = props => {
    const {classes} = props;
    return(
        <div className={classes.experiences}>
            <Paper className={classes.paper}>
                <Header avatarClass={classes.avatar}/>
                <Title />
                <Date />
                <Content />
            </Paper>
        </div>
    );
};

// const Experiences = props => {
//     return(
//         <div>
//             <Card>
//                 <CardContent>
//                     <Header />
//                 </CardContent>
//             </Card>
//         </div>
//     );
// };

Experiences.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Experiences);