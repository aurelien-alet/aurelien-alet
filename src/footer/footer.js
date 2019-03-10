import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import githubIcon from '../img/footer/github.png';
import linkedinIcon from '../img/footer/linkedin.png';

/**
 * Object containing the css properties for the footer components
 */
const styles = theme => ({
	footer: {
		height: 60,
	},
	img: {
		[theme.breakpoints.down('sm')]: {
			maxHeight: 30,
		},
		[theme.breakpoints.up('sm')]: {
        	maxHeight: 40,
		},
		
		marginRight: theme.spacing.unit,
	},
	button: {
		textTransform: 'none',
	},
	footerBar: {
		backgroundColor: 'black',
	},
	title: {
		[theme.breakpoints.down('sm')]: {
			maxHeight: '110%',
		},
		[theme.breakpoints.up('sm')]: {
			fontSize: '130%',
		},
	},
});

/**
 * Creates a button which redirects to a contact website (linkedin or github)
 * @param {object} props properties passed from the parent component
 */
const ContactButton = props => {
	const {image, title, nickname, href, imgClass, buttonClass, titleClass} = props;
	return(
		<Button color='primary' href={href} className={buttonClass}>
			<Grid container direction='row' justify='center' alignItems='center' className={titleClass}>
					<img alt={title} src={image} className={imgClass} />		
					{nickname}
			</Grid>
		</Button>
	);
};

/**
 * Component containing both contact buttons
 * @param {object} props properties passed from the parent component
 */
const Contact = props => {
	const { classes } = props;
	return(
		<div className={classes.footerBar}>
			<Grid container justify='space-evenly' alignItems='center' className={classes.footer}>
				<Grid item>
					<ContactButton 
						image={githubIcon}
						title='GitHub'
						nickname='aurelien-alet'
						href='https://github.com/aurelien-alet'
						imgClass={classes.img}
						buttonClass={classes.button}
						titleClass={classes.title}
					/>
				</Grid>
				<Grid item>
					<ContactButton 
						image={linkedinIcon}
						title='LinkedIn'
						href='https://www.linkedin.com/in/aurelien-alet'
						nickname='aurelien-alet'
						imgClass={classes.img}
						buttonClass={classes.button}
						titleClass={classes.title}
					/>
				</Grid>
			</Grid>
		</div>
	);
};

/**
 * Main component for the website footer
 * @param {object} props properties passed from the parent component
 */
const Footer = props => {
    const {classes} = props;
    return(
        <div >
			<Contact classes={classes} />
		</div>
    );
};

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
