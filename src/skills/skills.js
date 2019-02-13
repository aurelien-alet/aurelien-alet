import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Avatar, Grid, Typography, Divider, Button, Tooltip } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import { CalendarToday } from '@material-ui/icons';
import DATA from './data';
import javascriptPic from '../img/languages_icons/javascript.png';
import pythonPic from '../img/languages_icons/python.png';

const projectLabelGranting = (projectNumber, projectContext) => {
	return (projectNumber>1) ? ' projets '+projectContext+'s' : ' projet '+projectContext;
}

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
	paper: {
		padding: 2*theme.spacing.unit,
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
	const labelSchool = projectLabelGranting(schoolProjectsNb, 'universitaire');
	const labelWork = projectLabelGranting(workProjectsNb, 'professionnel');
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
};

const LibrariesAvatars = props => {
	const {libraries, avatarClass} = props;
	const avatars = libraries.map( library => {
		const {title, website, picture, projectNumber} = library;		
		return(
			<LanguageAvatar 
				title={title}
				website={website}
				picture={picture}
				projectNumber={projectNumber}
			/>
		);
	});	
	return(
		<Grid container>
			{avatars}
		</Grid>
	);
};

const LanguagePaper = props => {
	const { name, picture, projectNumber, avatarClass, paperClass } = props;
	const { work, school, personnal } = projectNumber;
	return(
		<Paper className={paperClass}>
			<Grid container>
				<Grid item>
					<Avatar alt={name} src={picture} className={avatarClass}/>
				</Grid>
				<Grid item >
					<Grid container alignItems='center' direction='column'>
						<Grid item xs={12}>
							<Title title={name} variant='h6' />
						</Grid>
						<Grid item xs={12} sm={3}>
							{work!==0 &&
								<Title title={work + projectLabelGranting(work, 'professionel')} variant='caption' />
							}
						</Grid>
						<Grid item xs={12} sm={3}>
							{personnal!==0 &&
								<Title title={personnal + projectLabelGranting(personnal, 'personnel')} variant='caption' />
							}
						</Grid>
						<Grid item xs={12} sm={3}>
							{school!==0 &&
								<Title title={school + projectLabelGranting(school, 'universitaire')} variant='caption' />
							}
						</Grid>						
					</Grid>
				</Grid>			
			</Grid>
		</Paper>
	);
};

const MainSkill = props => {
	const {frontSkills, avatarClass, paperClass} = props;
	const {title, principalLanguage, libraries, projectNumber} = frontSkills;
	const {title: languageName, picture: languagePic} = principalLanguage;
	return(
		<Paper className={paperClass}>
			<Grid container alignItems='center' direction='column'>
				<Grid item>				
					<Title title={title} variant='h5' />
				</Grid>
				<Grid item>		
					<LanguagePaper 
						name={languageName} 
						picture={languagePic}
						projectNumber={projectNumber}
						libraries={libraries}
						avatarClass={avatarClass} 
						paperClass={paperClass}/>
				</Grid>
				<Grid item>
					<LibrariesAvatars libraries={libraries} />
				</Grid>
			</Grid>		
		</Paper>
	);
};

const FirstSkills = props => {
	const {classes} = props;
	return(
		<Grid container justify='space-evenly'>
			<MainSkill frontSkills={DATA.FRONT_END_SKILLS} avatarClass={classes.avatar} paperClass={classes.paper}/>
			<MainSkill frontSkills={DATA.BACK_END_SKILLS} avatarClass={classes.avatar} paperClass={classes.paper}/>
		</Grid>
	);
};

const Skills = props => {
    const {classes} = props;
    return(
        <div className={classes.skills}>
            <Typography variant='h4' gutterBottom>
                Compétences
            </Typography>
            <Divider className={classes.divider}/>
			<FirstSkills classes={classes}/>			
			<SecondSkillsList classes={classes}/> 
			<DatabaseSkillsList classes={classes}/>        
		</div>
    );
};

Skills.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Skills);
