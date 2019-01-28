import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import { Button } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';
import { CalendarToday } from '@material-ui/icons';
import angular from './avatars/angular.png';
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
        // backgroundColor: theme.palette.primary.main,
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
    console.log(languages)
    return(
        <Grid container justify='flex-end'>
            <Grid item>
                <a title={languages[0].title} href={languages[0].website}>
                    <Avatar alt={languages[0].title} src={languages[0].picture} className={avatarClass} />
                </a>
            </Grid>
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
    return(
        <Grid container justify='center'>
            <Button variant="contained" href="http://www.groupe-sii.com/fr" >
                Groupe SII
            </Button>
        </Grid>
    );
};

const Experience = props => {
    const {classes, languages, title, context, period, description} = props;
    return(
        <Paper className={classes.paper}>
            <Header languages={languages} avatarClass={classes.avatar}/>
            <Title title={title}/>
            <Context context={context}/>
            <Date period={period} dateClass={classes.date} calendarClass={classes.calendar}/>
            <Content description={description} contentClass={classes.content}/>
            <FooterButton />
        </Paper>
    );
}

const ExperiencesList = props => {
    console.log(EXPERIENCES);
    const {classes} = props;
    const experiences = EXPERIENCES.map( experience =>{
        return(
            <Experience
                languages={experience.languages}
                title={experience.title}
                context={experience.context}
                period={experience.period}
                description={experience.description}
                classes={classes}
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