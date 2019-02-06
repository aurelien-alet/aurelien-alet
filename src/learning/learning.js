import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Avatar, Grid, Typography, Divider, Button } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import { CalendarToday } from '@material-ui/icons';
import DATA from './data';

const styles = theme => ({
    largePaper: {
        maxWidth: 400,
        padding: 2*theme.spacing.unit,
    },
    shortPaper: {
        maxWidth: 250,
        padding: 2*theme.spacing.unit,
    },
    schools: {
        padding: 3*theme.spacing.unit,
    },
    calendar: {
        fontSize: '1em',
        marginRight: theme.spacing.unit,
    },
    image: {
        maxWidth: '100%',
    },
    divider: {
        marginBottom: 2*theme.spacing.unit,
    },
});

const Header = props => {
    const { image: { title, picture, website }, imageClass } = props;
    return(
        <a title={title} href={website}>
            <img src={picture} alt={title} className={imageClass} />
        </a>
    );
}

const Title = props => {
    const { title, variant } = props;
    return(
        <Typography variant={variant}>
            {title}
        </Typography>
    );
};

const Date = props =>{
    const { period, dateClass, calendarClass } = props;
    return(
        <div>
            
            <Typography  variant='caption' gutterBottom className={dateClass}>
                {period.begin} - {period.end}
            </Typography>
        </div>
    );
}

const Content = props => {
    const { description, city } = props;
    return(
        <Typography variant='body1' gutterBottom>
            {description}
            &nbsp;
            &mdash;
            &nbsp;
            <i>{city}</i>
        </Typography>
    );
};

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

const ShortPaper = props => {
    const {classes, title, period, description, city, } = props;
    return (
        <Paper className={classes.shortPaper}>
            <Grid container justify='center'>
                <Title title={title} variant='subtitle1'/>
                <Date period={period} dateClass={classes.date} calendarClass={classes.calendar}/>
                <Content description={description} city={city} />
            </Grid>
        </Paper>
    );
}

const LargePaper = props => {
    const {classes, image, title, period, description, city, website,} = props;
    return (
        <Paper className={classes.largePaper}>
            <Header image={image} imageClass={classes.image} />
            <Title title={title} variant='h6'/>
            <Date period={period} dateClass={classes.date} calendarClass={classes.calendar}/>
            <Content description={description} city={city} />
            <FooterButton website={website} />
        </Paper>
    )
}

const School = props => {
    const {classes, image, title, period, description, city, website,} = props;
    let paper;
    if( image ) {
        paper = (
            <LargePaper 
                image={image}
                title={title}
                period={period}
                description={description}
                city={city}
                website={website}
                classes={classes} 
            />
        );
    } else {
        paper = (
            <ShortPaper 
                title={title}
                period={period}
                description={description}
                city={city}
                classes={classes}
            />
        );
    }
    return(
        <div>
            {paper}
        </div>
    );
}

const SchoolsList = props => {
    const {classes} = props;
    const schools = DATA.SCHOOLS.map( school =>{
        const { image, title, period, description, city, website, } = school;
        return(
            <Grid item key={title} >
                <School 
                    image={image}
                    title={title}
                    period={period}
                    description={description}
                    city={city}
                    website={website}
                    classes={classes}
                />            
            </Grid>
        );
    });
    return(
        <div className={classes.schools}>
            <Typography variant='h4' gutterBottom>
                Formation
            </Typography>
            <Divider className={classes.divider}/>
            <Grid container justify='center' direction='row' alignItems='center' spacing={16} >
                {schools}
            </Grid>
        </div>
    );
};

SchoolsList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SchoolsList);
