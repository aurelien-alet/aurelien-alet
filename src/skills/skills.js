import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Avatar, Grid, Typography, Divider, Button, Tooltip } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import { CalendarToday } from '@material-ui/icons';
import DATA from './data';

const styles = theme => ({
	divider: {
        marginBottom: 2*theme.spacing.unit,
    },
	skills: {
		padding: 3*theme.spacing.unit,
	},
	avatar: {
		width: 70,
		height: 70,
        '&:hover': {
            backgroundColor: grey[200],
        },
    },
});

const Title = props => {
    const { title, variant } = props;
    return(
        <Typography variant={variant}>
            {title}
        </Typography>
    );
};

const AvatarTooltip = props => {
	const { title, schoolProjectsNb, workProjectsNb } = props;
	const labelSchool = (schoolProjectsNb>1) ? ' projets universitaires' : ' projet universitaire';
	const labelWork = (schoolProjectsNb>1) ? ' projets professionnels' : ' projet professionnel';
	return (
		<div>
			<Title title={title} variant='subtitle2' />
			{ workProjectsNb > 0 &&
				<Title title={workProjectsNb + labelWork} variant='caption' />
			}
			{ schoolProjectsNb > 0 &&
				<Title title={schoolProjectsNb + labelSchool} variant='caption' />
			}
		</div>
	);
};

const LanguageAvatar = props => {
	const { title, website, picture, projectNumber, avatarClass } = props;
	const tooltip = (
		<AvatarTooltip 
			title={title}
			schoolProjectsNb={projectNumber.school}
			workProjectsNb={projectNumber.work}
		/>
	);
	return (
		<a href={website}>
			<Tooltip title={tooltip}  disableTouchListener placement='right'>
				<Avatar alt={title} src={picture} className={avatarClass} />
			</Tooltip>		
		</a>
	);
};

const SecondSkillsList = props => {
	const {classes} = props;
	const languages = DATA.SECOND_LANGUAGES.map( language =>{
		const { title, picture, website, projectNumber } = language;
		return(
			<LanguageAvatar 
				title={title}
				website={website}
				picture={picture}
				projectNumber={projectNumber}
				avatarClass={classes.avatar}
			/>
		);
	});
	return (
		<Grid container justify='space-evenly' >
			{languages}
		</Grid>
	);
};

const DatabaseSkillsList = props => {
	const {classes} = props;
	const dbSkills = DATA.DATABASES_SKILLS.map( db => {
		const { title, picture, website, projectNumber } = db;
		return(
			<LanguageAvatar 
				title={title}
				website={website}
				picture={picture}
				projectNumber={projectNumber}
				avatarClass={classes.avatar}
			/>
		);
	});
	return (
		<Grid container justify='space-evenly' >
			{dbSkills}
		</Grid>
	);
}

const Skills = props => {
    const {classes} = props;
    return(
        <div className={classes.skills}>
            <Typography variant='h4' gutterBottom>
                Compétences
            </Typography>
            <Divider className={classes.divider}/>
			<SecondSkillsList classes={classes}/> 
			<DatabaseSkillsList classes={classes}/>        
		</div>
    );
};

Skills.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Skills);
