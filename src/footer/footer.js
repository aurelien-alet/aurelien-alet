import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Avatar, Grid, Typography, Divider, Button, Tooltip, Chip } from '@material-ui/core';
import githubIcon from '../img/footer/github.png';
import linkedinIcon from '../img/footer/linkedin.png';


const styles = theme => ({
	footer: {
		height: 60,
	},
	img: {
		maxHeight: 40,
		marginRight: theme.spacing.unit,
	},
	button: {
		textTransform: 'none',
		fontSize: theme.typography.h6.fontSize,
	},
});

const ContactButton = props => {
	const {image, title, href, imgClass, buttonClass} = props;
	return(
		<Button color='primary' href={href} className={buttonClass}>
			<Grid container direction='row' alignItems='center'>
				<img src={image} className={imgClass} />
				{title}
			</Grid>
		</Button>
	);
};

const Contact = props => {
	const { classes } = props;
	return(
		<Paper >
			<Grid container justify='space-evenly' alignItems='center' className={classes.footer}>
				<Grid item>
					<ContactButton 
						image={githubIcon}
						title='GitHub'
						href='#'
						imgClass={classes.img}
						buttonClass={classes.button}
					/>
				</Grid>
				<Grid item>
					<ContactButton 
						image={linkedinIcon}
						title='LinkedIn'
						href='#'
						imgClass={classes.img}
						buttonClass={classes.button}
					/>
				</Grid>
			</Grid>
		</Paper>
	);
};

const Footer = props => {
    const {classes} = props;;
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
