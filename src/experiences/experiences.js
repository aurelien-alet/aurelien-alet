import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Avatar, Grid, Typography, Divider, Button, Tooltip } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import { CalendarToday } from '@material-ui/icons';
import EXPERIENCES from './data'

/**
 * Object containing the css properties for the experiences components
 */
const styles = theme => ({
    paper: {
        maxWidth: 400,
        padding: 2*theme.spacing.unit,
        height: '100%',
    },
    experiences: {
        padding: 3*theme.spacing.unit,
		marginTop: 3*theme.spacing.unit,
		marginBottom: 3*theme.spacing.unit,
    },
    avatar: {
        marginLeft: theme.spacing.unit,
        '&:hover': {
            backgroundColor: grey[200],
        },
    },
    date: {
        marginTop: 1.5*theme.spacing.unit,
        marginBottom: 1.5*theme.spacing.unit,
    },
    calendar: {
        fontSize: '1em',
        marginRight: theme.spacing.unit,
    },
    content: {
        marginBottom: 2.5*theme.spacing.unit,
    },
    divider: {
        marginBottom: 5*theme.spacing.unit,
    },
});

/**
 * Displays the header of an experience card
 * This header contains avatars with tooltips 
 * @param {object} props properties passed from the parent component
 */
const Header = props => {
    const {languages, avatarClass} = props;
    const avatars = languages.map( language => {
        const {title, picture} = language;
        return(
            <Grid item key={title}>
				<Tooltip title={title} disableTouchListener>
                   <Avatar alt={title} src={picture} className={avatarClass} />
				</Tooltip>
            </Grid>
        );
    });
    return(
        <Grid container justify='flex-end' direction='row'>
            {avatars}
        </Grid>
    );
};

/**
 * Displays a title
 * @param {object} props properties passed from the parent component
 */
const Title = props => {
    const {title} = props;
    return(
        <Typography variant='h6'>
            {title}
        </Typography>
    );
};

/**
 * Displays the context, which is the grey text on each experience card
 * @param {object} props properties passed from the parent component
 */
const Context = props => {
    const {context} = props;
    return(
        <Typography variant='subtitle1' gutterBottom>
            {context}
        </Typography>
    );
};

/**
 * Displays the duration period of the experience on an experience card
 * @param {object} props properties passed from the parent component
 */
const Date = props =>{
    const { period, dateClass, calendarClass } = props;
    return(
        <div>
            
            <Typography  variant='caption' gutterBottom className={dateClass}>
                <CalendarToday className={calendarClass}/>
                De {period.begin} à {period.end}
            </Typography>
        </div>
    );
}

/**
 * Gives a description of the experience on an experience card
 * This is the main text of an experience card
 * @param {object} props properties passed from the parent component
 */
const Content = props => {
    const {description, contentClass} = props;
    return(
        <Typography variant='body1' className={contentClass} gutterBottom align='justify'>
            {description}
        </Typography>
    );
};

/**
 * If a link have to be given on an experience card, creates a button at the bottom of it
 * @param {object} props properties passed from the parent component 
 */
const FooterButton = props => {
    const {website: {title: content, href}} = props;
    return(
        <Grid container justify='center'>
            <Button color='primary' href={href} >
                {content}
            </Button>
        </Grid>
    );
};

/**
 * Component which render an experience card
 * @param {object} props properties passed from the parent component
 */
const Experience = props => {
    const {classes, languages, title, context, period, description, website} = props;
    return(
        <Paper className={classes.paper}>
            <Header languages={languages} avatarClass={classes.avatar}/>
            <Title title={title}/>
            <Context context={context}/>
            <Date period={period} dateClass={classes.date} calendarClass={classes.calendar}/>
            <Content description={description} contentClass={classes.content}/>
            {website &&
                <FooterButton website={website}/>
            }
        </Paper>
    );
}

/**
 * Main component for the experiences
 * Get the data list from ./data, and displays an experience card for each data
 * @param {object} props properties passed from the parent component
 */
const ExperiencesList = props => {
    const {classes} = props;
    const experiences = EXPERIENCES.map( experience =>{
        const { languages, title, context, period, description, website } = experience;
        return(
            <Grid item key={title}>
                <Experience 
                    languages={languages}
                    title={title}
                    context={context}
                    period={period}
                    description={description}
                    website={website}
                    classes={classes}
                    key={title}
                />
            </Grid>
        );
    });
    return(
        <div className={classes.experiences}>
            <Typography variant='h4' gutterBottom>
                Expériences professionnelles
            </Typography>
            <Divider className={classes.divider}/>
            <Grid container justify='center' direction='row' alignItems='stretch' spacing={16}>
                {experiences}
            </Grid>
        </div>
    );
};

ExperiencesList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ExperiencesList);
