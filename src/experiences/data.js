import angularPic from '../img/languages_icons/angular.png';
import aureliaPic from '../img/languages_icons/aurelia.png';
import dialogflowPic from '../img/languages_icons/dialogflow.jpg';
import javaPic from '../img/languages_icons/java.png';
import jqueryPic from '../img/languages_icons/jquery.png'
import nodePic from '../img/languages_icons/node.png';
import pythonPic from '../img/languages_icons/python.png';
import springPic from '../img/languages_icons/spring.png';
import javascriptPic from '../img/languages_icons/javascript.png';

const LANGUAGES = {
    angular: {
        title: 'Angular',
        picture: angularPic,
        website: 'https://angular.io/',
    },
    aurelia: {
        title: 'Aurelia',
        picture: aureliaPic,
        website: 'https://aurelia.io/',
    },
    dialogflow: {
        title: 'Dialogflow',
        picture: dialogflowPic,
        website: 'https://dialogflow.com/',
    },
    java: {
        title: 'Java',
        picture: javaPic,
        website: 'https://www.java.com/',
    },
    jquery: {
        title: 'jQuery',
        picture: jqueryPic,
        website: 'https://jquery.com/',
    },
    node: {
        title: 'Node.js',
        picture: nodePic,
        website: 'https://nodejs.org/',
    },
    python: {
        title: 'Python',
        picture: pythonPic,
        website: 'https://www.python.org/',
    },
    spring: {
        title: 'Spring',
        picture: springPic,
        website: 'https://spring.io/',
    },
	javascript: {
        title: 'JavaScript',
        picture: javascriptPic,
        website: 'https://developer.mozilla.org/docs/Web/JavaScript',
    }
};

const { angular, aurelia, java, node, python, jquery, spring, javascript } = LANGUAGES;

const EXPERIENCES = [
	{
		title: 'Assistant de Déploiement',
		context: 'Projet pour La Banque Postale',
		period: { begin: 'mai 2019', end: 'maintenant'},
		languages: [python, javascript],
		description: 'Développement d\'un outil permettant de déployer les applications de La Banque Postale sur des environnements de test et de production.',
	},
    {
        title: 'Analyse et traitement de données',
        context: 'Projet pour le CEA',
        period: { begin: 'août 2018', end: 'mai 2019'},
        languages: [python, angular], // TODO: add django ?
        description: 'Développement d’une application web de visualisation, d’analyse et de traitement de données. Utilisation du framework django.',
    },{
        title: 'Chatbot',
        context: 'Stage de fin d\'études',
        period: { begin: 'février 2018', end: 'juillet 2018'},
        languages: [angular, node, java, spring],
        description: 'Développement d\'un ChatBot pour les candidats et les collaborateurs de SII Bordeaux. Utilisation de l\'outil Dialogflow.',
        website: {
			title: 'Groupe SII',
            href: 'http://www.groupe-sii.com/fr',
        },
    },{
        title: 'digitalQuizz',
        context: 'Stage de seconde année d\'école d\'ingénieur',
        period: { begin: 'mai 2017', end: 'septembre 2017'},
        languages: [aurelia, jquery, java],
        description: 'Stage effectué dans la société Multimédia SOLUTIONS à Cestas. Développement d\'une application web pour gérer des questionnaires dématérialisés.',
        website: {
            title: 'Multimédia SOLUTIONS',
            href: 'https://www.lug.com/',
        },
    },
];

export default EXPERIENCES;

