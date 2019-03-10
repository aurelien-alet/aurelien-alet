import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Grid, Typography, Divider, Button } from '@material-ui/core';
import DATA from './data';

/**
 * Object containing the css properties for the learning components
 */
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
		marginTop: 3*theme.spacing.unit,
		marginBottom: 3*theme.spacing.unit,
    },
    calendar: {
        fontSize: '1em',
        marginRight: theme.spacing.unit,
    },
    image: {
        maxWidth: '100%',
    },
    divider: {
        marginBottom: 5*theme.spacing.unit,
    },
});

/**
 * Header for a large school card
 * Contains a picture
 * @param {object} props properties passed from the parent component
 */
const Header = props => {
    const { image: { title, picture, website }, imageClass } = props;
    return(
        <a title={title} href={website}>
            <img src={picture} alt={title} className={imageClass} />
        </a>
    );
}

/**
 * Simply renders a title component
 * @param {object} props properties passed from the parent component
 */
const Title = props => {
    const { title, variant } = props;
    return(
        <Typography variant={variant}>
            {title}
        </Typography>
    );
};

/**
 * Displays the studying period on a card school 
 * @param {object} props properties passed from the parent component
 */
const Date = props =>{
    const { period, dateClass } = props;
    return(
        <div>
            
            <Typography  variant='caption' gutterBottom className={dateClass}>
                {period.begin} - {period.end}
            </Typography>
        </div>
    );
}

/**
 * Displays the content of a school card
 * Content contains the name of the school and the city where the school is located
 * @param {object} props properties passed from the parent component
 */
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

/**
 * For a large school card, displays a button at the bottom of it which refers the school website 
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
 * Displays a short school card, containing school name, formation provided, school place 
 * and studiying period 
 * @param {*} props 
 */
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

/**
 * Displays a large school card, containing the same elements as short school card
 * plus an extra picture and a website reference 
 * @param {object} props properties passed from the parent component 
 */
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

/**
 * Displays a short or large school card, depending on if the props object contans
 * a picture or not
 * @param {object} props properties passed from the parent component
 */
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

/**
 * Create school components for each object passed in school list
 * @param {array[objects]} schoolList list of schools informations to display 
 * @param {object} classes css classes to pass to created components
 */
const renderSchoolList = (schoolList, classes) => {
	return schoolList.map( school =>{
        const { image, title, period, description, city, website } = school;
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
}

/**
 * Main learning component
 * Get the school to display from ./data
 * For each one of this scholl, displays a short or large card
 */
const SchoolsList = props => {
    const {classes} = props;
	const schoolsWithImagesFilter = DATA.SCHOOLS.filter( school => school.image );
	const schoolsWithImages = renderSchoolList(schoolsWithImagesFilter, classes);	
	const schoolsWithoutImageFilter = DATA.SCHOOLS.filter( school => !school.image );
	const schoolsWithoutImage = renderSchoolList(schoolsWithoutImageFilter, classes);
    return(
        <div className={classes.schools}>
            <Typography variant='h4' gutterBottom>
                Formation
            </Typography>
            <Divider className={classes.divider}/>
            <Grid container justify='center' direction='row' alignItems='center' spacing={16} >
                {schoolsWithImages}
				<Grid item>
				<Grid container justify='center' direction='row' alignItems='center' spacing={16} >
					{schoolsWithoutImage}
				</Grid>
				</Grid>
            </Grid>
        </div>
    );
};

SchoolsList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SchoolsList);
