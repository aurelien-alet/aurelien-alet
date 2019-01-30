import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Avatar, Grid, Typography, Divider, Button } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import { CalendarToday } from '@material-ui/icons';
import EXPERIENCES from './data'

const styles = theme => ({
    paper: {
        width: 400,
        maxWidth: '100%',
        padding: 2*theme.spacing.unit,
        marginTop: 2*theme.spacing.unit,
    },
    experiences: {
        padding: 3*theme.spacing.unit,
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
    }
});

const Header = props => {
    const {languages, avatarClass} = props;
    const avatars = languages.map( language => {
        const {title, website, picture} = language;
        return(
            <Grid item key={title}>
                <a title={title} href={website}>
                    <Avatar alt={title} src={picture} className={avatarClass} />
                </a>
            </Grid>
        );
    });
    return(
        <Grid container justify='flex-end' direction='row'>
            {avatars}
        </Grid>
    );
};

const Title = props => {
    const {title} = props;
    return(
        <Typography variant='h6'>
            {title}
        </Typography>
    );
};

const Context = props => {
    const {context} = props;
    return(
        <Typography variant='subtitle1' gutterBottom>
            {context}
        </Typography>
    );
};

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

const Content = props => {
    const {description, contentClass} = props;
    return(
        <Typography variant='body1' className={contentClass} gutterBottom>
            {description}
        </Typography>
    );
};

const FooterButton = props => {
    const {website: {title: content, href}} = props;
    return(
        <Grid container justify='center'>
            <Button variant="contained" href={href} >
                {content}
            </Button>
        </Grid>
    );
};

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

const ExperiencesList = props => {
    const {classes} = props;
    const experiences = EXPERIENCES.map( experience =>{
        const { languages, title, context, period, description, website } = experience;
        return(
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
        );
    });
    return(
        <div className={classes.experiences}>
            <Typography variant='h4' gutterBottom>
                Expériences professionnelles
            </Typography>
            <Divider />
            {experiences}
        </div>
    );
};

ExperiencesList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ExperiencesList);