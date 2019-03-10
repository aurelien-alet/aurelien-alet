import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Avatar, Grid, Typography, Divider, Tooltip, Chip } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import DATA from './data';

/**
 * Given a number of projects and a context sentence, grant this sentence with the project number
 * ex:
 *    (3, 'personnel') => 3 projets personnels
 *    (1, 'professionnel') => 1 projet professionnel
 * @param {number} projectNumber number of project linked to the context
 * @param {string} projectContext the context of the project : 'professionnel', 'personnel' ou 
 * 'universitaire' 
 */
const projectLabelGranting = (projectNumber, projectContext) => {
	return (projectNumber>1) ? ' projets '+projectContext+'s' : ' projet '+projectContext;
}

/**
 * Object containing the css properties for the skills components
 */
const styles = theme => ({
	divider: {
        marginBottom: 2*theme.spacing.unit,
    },
	skills: {
		padding: 3*theme.spacing.unit,
		marginTop: 3*theme.spacing.unit,
		marginBottom: 3*theme.spacing.unit,
	},
	avatar: {
		width: 70,
		height: 70,
        '&:hover': {
            backgroundColor: grey[200],
        },
    },
	mainAvatar: {
		width: 70,
		height: 70,
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
		marginTop: 5*theme.spacing.unit,
		marginBottom: 5*theme.spacing.unit,
		fontSize: '100%',
	},
});

/**
 * Displays a title
 * @param {object} props properties passed from the parent component
 */
const Title = props => {
    const { title, variant, align, color } = props;
    return(
        <Typography variant={variant} align={align} style={{color: color}}>
            {title}
        </Typography>
    );
};

/**
 * Displays a tooltip when the cursor is over a language avatar
 * The informations displayed are the nomber of projects done for each context :
 * professionnal, personnal or at school
 * @param {object} props properties passed from the parent component
 */
const AvatarTooltip = props => {
	const { title, schoolProjectsNb, workProjectsNb, personnalProjectsNb } = props;
	const labelSchool = projectLabelGranting(schoolProjectsNb, 'universitaire');
	const labelWork = projectLabelGranting(workProjectsNb, 'professionnel');
	const labelPersonnal = projectLabelGranting(personnalProjectsNb, 'personnel'); 
	return (
		<div>
			<Title title={title} variant='subtitle2' color='white'/>
			{ workProjectsNb > 0 &&
				<Title title={workProjectsNb + labelWork} variant='caption' color='white' />
			}
			{ personnalProjectsNb > 0 &&
				<Title title={personnalProjectsNb + labelPersonnal} variant='caption' color='white' />
			}
			{ schoolProjectsNb > 0 &&
				<Title title={schoolProjectsNb + labelSchool} variant='caption' color='white' />
			}
		</div>
	);
};

/**
 * Displays an avatar for a programming language
 * @param {object} props properties passed from the parent component 
 */
const LanguageAvatar = props => {
	const { title, picture, projectNumber, avatarClass} = props;
	const tooltip = (
		<AvatarTooltip 
			title={title}
			schoolProjectsNb={projectNumber.school}
			workProjectsNb={projectNumber.work}
		/>
	);
	return (
		<Tooltip title={tooltip}  disableTouchListener placement='right'>
			<Avatar alt={title} src={picture} className={avatarClass} />
		</Tooltip>		
		
	);
};

/**
 * Displays a list of avatar for programming languages
 * These languages correspond to my secondary skills
 * @param {object} props properties passed from the parent component
 */
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
				key={title}
			/>
		);
	});
	return (
		<Grid container justify='space-evenly' >
			{languages}
		</Grid>
	);
};

/**
 * Displays a list of avatar for databases querying languages
 * @param {object} props properties passed from the parent component 
 */
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
				key={title}
			/>
		);
	});
	return (
		<Grid container justify='space-evenly' >
			{dbSkills}
		</Grid>
	);
};

/**
 * Displays a list of chips containing languages libraries or frameworks
 * This libraries or frameworks are attached to main skills languages
 * @param {object} props properties passed from the parent component 
 */
const LibrariesAvatars = props => {
	const {libraries} = props;
	const avatars = libraries.map( library => {
		const {title, projectNumber} = library;
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
		if( schoolNb + workNb + personnalNb !== 0 ) {
			return(
				<Tooltip title={tooltip}  disableTouchListener placement='bottom' key={title}>
					<Grid item>
						<Chip label={title} color='primary' />
					</Grid>
				</Tooltip>
			);
		} else {
			return(
				<Grid item key={title}>
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

/**
 * For a main skill, displays the avatar for the corresponding programming language
 * plus the number of projects done in each context(personnal, professional or ar school)
 * @param {object} props properties passed from the parent component 
 */
const LanguagePaper = props => {
	const { name, picture, projectNumber, mainAvatarClass, languagePaperClass, languageTitleClass } = props;
	const { work, school, personnal } = projectNumber;
	return(
		<Paper className={languagePaperClass}>
			<Grid container justify='center'>
				<Grid item>
					<Avatar alt={name} src={picture} className={mainAvatarClass} />
				</Grid>
				<Grid item>
					<Grid container direction='row' justify='space-evenly'>
						<Grid item xs={12} justify='center' container className={languageTitleClass}>
							<Title title={name} variant='h6' />
						</Grid>
						{work!==0 &&
							<Grid item xs={3} justify='center' container>
								<Title title={work + projectLabelGranting(work, 'professionnel')} variant='caption' align='center'/>
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

/**
 * Displays a card for a main skill language
 * This card contains the number of projects done for the correponding programming language
 * for each context (personnal, professionnal or at school)
 * It contains a list of framework skills attached to this language too
 * @param {object} props properties passed from the parent component 
 */
const MainSkill = props => {
	const {frontSkills, avatarClass, mainAvatarClass, paperClass, languagePaperClass, languageTitleClass} = props;
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
						mainAvatarClass={mainAvatarClass}
						paperClass={paperClass}
						languagePaperClass={languagePaperClass} 
						languageTitleClass={languageTitleClass}/>
				</Grid>
				<LibrariesAvatars libraries={libraries} />
			</Grid>		
		</Paper>
	);
};

/**
 * Display main fronted an backed skills
 * @param {object} props properties passed from the parent component 
 */
const FirstSkills = props => {
	const {classes} = props;
	return(
		<Grid container justify='space-evenly'>
			<MainSkill frontSkills={DATA.FRONT_END_SKILLS} avatarClass={classes.avatar} mainAvatarClass={classes.mainAvatar} paperClass={classes.paper} languagePaperClass={classes.languagePaper} languageTitleClass={classes.languageTitle} />
			<MainSkill frontSkills={DATA.BACK_END_SKILLS} avatarClass={classes.avatar} mainAvatarClass={classes.mainAvatar} paperClass={classes.paper} languagePaperClass={classes.languagePaper}
languageTitleClass={classes.languageTitle} />
		</Grid>
	);
};

/**
 * Display all the skills (main, seconday and database)
 * For each one, displays a description
 * @param {object} props properties passed from the parent component 
 */
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
				J'exerce le métier de développeur depuis septembre 2018. Très attiré par le web, j'utilise des technologies aussi bien front-end que back-end. Les langages que j'affectionne particulièrement sont le Python et le Javascript.
			</Typography>
			<FirstSkills classes={classes}/>	
			<Typography className={descriptionClass} align='justify'>
				Issu d'une formation d'ingénieur informatique, j'ai eu l'occasion de pratiquer un nombre important de langages.
			</Typography>		
			<SecondSkillsList classes={classes}/>
			<Typography className={descriptionClass} align='justify'>
				Les projets professionnels et universitaires que j'ai réalisés m'ont aussi permis d'utiliser différents systèmes de gestion de bases de données.
			</Typography> 
			<DatabaseSkillsList classes={classes}/>
		</div>
    );
};

Skills.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Skills);
