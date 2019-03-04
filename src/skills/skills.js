import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Avatar, Grid, Typography, Divider, Button, Tooltip, Chip } from '@material-ui/core';
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
		margin: theme.spacing.unit,
		width: '100%',
		maxWidth: 450,
	},
	languagePaper: {
		padding: 2*theme.spacing.unit,
		marginTop: 2*theme.spacing.unit,
		marginBottom: 2*theme.spacing.unit,
		width: '100%',
	},
	chip: {
		margin: theme.spacing.unit,
	},
	languageTitle: {
		marginBottom: theme.spacing.unit,
	},
	description: {
		marginTop: 3*theme.spacing.unit,
		marginBottom: 3*theme.spacing.unit,
		fontSize: '100%',
	},
});

const Title = props => {
    const { title, variant, align } = props;
    return(
        <Typography variant={variant} align={align}>
            {title}
        </Typography>
    );
};

const AvatarTooltip = props => {
	const { title, schoolProjectsNb, workProjectsNb, personnalProjectsNb } = props;
	const labelSchool = projectLabelGranting(schoolProjectsNb, 'universitaire');
	const labelWork = projectLabelGranting(workProjectsNb, 'professionnel');
	const labelPersonnal = projectLabelGranting(personnalProjectsNb, 'personnel'); 
	return (
		<div>
			<Title title={title} variant='subtitle2' />
			{ workProjectsNb > 0 &&
				<Title title={workProjectsNb + labelWork} variant='caption' />
			}
			{ personnalProjectsNb > 0 &&
				<Title title={personnalProjectsNb + labelPersonnal} variant='caption' />
			}
			{ schoolProjectsNb > 0 &&
				<Title title={schoolProjectsNb + labelSchool} variant='caption' />
			}
		</div>
	);
};

const LanguageAvatarBis = props => {
	const { title, website, picture, projectNumber, avatarClass } = props;
	const tooltip = (
		<AvatarTooltip 
			title={title}
			schoolProjectsNb={projectNumber.school}
			workProjectsNb={projectNumber.work}
		/>
	);
	return (
		<Chip label={title} />
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
		const schoolNb = projectNumber.school;
		const workNb = projectNumber.work;
		const personnalNb = projectNumber.personnal;
		const tooltip = (
			<AvatarTooltip 
				schoolProjectsNb={schoolNb}
				workProjectsNb={workNb}
				personnalProjectsNb={personnalNb}
			/>
		);
		console.log(schoolNb);
		if( schoolNb + workNb + personnalNb !== 0 ) {
			return(
				<Tooltip title={tooltip}  disableTouchListener placement='bottom'>
					<Grid item>
						<Chip label={title} color='primary' />
					</Grid>
				</Tooltip>
			);
		} else {
			return(
				<Grid item>
					<Chip label={title} color='primary' />
				</Grid>
			);
		}
	});	
	return(
		<Grid item container justify='center' spacing={8}>
			{avatars}
		</Grid>
	);
};

const LibrariesAvatarsBis = props => {
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
	const { name, picture, projectNumber, avatarClass, paperClass, languagePaperClass, languageTitleClass } = props;
	const { work, school, personnal } = projectNumber;
	return(
		<Paper className={languagePaperClass}>
			<Grid container justify='center'>
				<Grid item>
					<Avatar alt={name} src={picture} className={avatarClass}/>
				</Grid>
				<Grid item>
					<Grid container direction='row' justify='space-evenly'>
						<Grid item xs={12} justify='center' container className={languageTitleClass}>
							<Title title={name} variant='h6' />
						</Grid>
						{work!==0 &&
							<Grid item xs={3} justify='center' container>
								<Title title={work + projectLabelGranting(work, 'professionel')} variant='caption' align='center'/>
							</Grid>
						}
						{personnal!==0 &&
							<Grid item xs={3} justify='center' container>
								<Title title={personnal + projectLabelGranting(personnal, 'personnel')} variant='caption' align='center'/>
							</Grid>
						}
						{school!==0 &&
							<Grid item xs={3} justify='center' container>
								<Title title={school + projectLabelGranting(school, 'universitaire')} variant='caption' align='center'/>
							</Grid>						
						}
					</Grid>
				</Grid>			
			</Grid>
		</Paper>
	);
};

const MainSkill = props => {
	const {frontSkills, avatarClass, paperClass, languagePaperClass, languageTitleClass} = props;
	const {title, principalLanguage, libraries, projectNumber} = frontSkills;
	const {title: languageName, picture: languagePic} = principalLanguage;
	return(
		<Paper className={paperClass}>
			<Grid container alignItems='center' direction='column'>
				<Grid item>				
					<Title title={title} variant='h5' />
				</Grid>
				<Grid item  >		
					<LanguagePaper 
						name={languageName} 
						picture={languagePic}
						projectNumber={projectNumber}
						libraries={libraries}
						avatarClass={avatarClass} 
						paperClass={paperClass}
						languagePaperClass={languagePaperClass} 
						languageTitleClass={languageTitleClass}/>
				</Grid>
				<LibrariesAvatars libraries={libraries} />
			</Grid>		
		</Paper>
	);
};

const FirstSkills = props => {
	const {classes} = props;
	return(
		<Grid container justify='space-evenly'>
			<MainSkill frontSkills={DATA.FRONT_END_SKILLS} avatarClass={classes.avatar} paperClass={classes.paper} languagePaperClass={classes.languagePaper} languageTitleClass={classes.languageTitle} />
			<MainSkill frontSkills={DATA.BACK_END_SKILLS} avatarClass={classes.avatar} paperClass={classes.paper} languagePaperClass={classes.languagePaper}
languageTitleClass={classes.languageTitle} />
		</Grid>
	);
};

const Skills = props => {
    const {classes} = props;
	const descriptionClass = classes.description;
    return(
        <div className={classes.skills}>
            <Typography variant='h4' gutterBottom>
                Compétences
            </Typography>
            <Divider className={classes.divider}/>
			<Typography className={descriptionClass} align='justify'>
				J'exerce le métier de développeur depuis septembre 2018. Très attiré par les technologies web, j'utilise des langages aussi bien front-end que backend. Les technologies que j'affectionnent particulièrement sont le Python et le Javascript.
			</Typography>
			<FirstSkills classes={classes}/>	
			<Typography className={descriptionClass} align='justify'>
				Issu d'une formation d'ingénieur informatique, j'ai eu l'occasion de pratiquer d'autres langages.
			</Typography>		
			<SecondSkillsList classes={classes}/>
			<Typography className={descriptionClass} align='justify'>
				Les projets professionels et universitaires que j'ai réalisés m'ont aussi permis d'utiliser différents systèmes de gestion de bases de données.
			</Typography> 
			<DatabaseSkillsList classes={classes}/>
		</div>
    );
};

Skills.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Skills);
