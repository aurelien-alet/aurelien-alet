import angularPic from './avatars/angular.png';
import aureliaPic from './avatars/aurelia.png';
import dialogflowPic from './avatars/dialogflow.jpg';
import javaPic from './avatars/java.png';
import jqueryPic from './avatars/jquery.jpg'
import nodePic from './avatars/node.png';
import pythonPic from './avatars/python.png';
import springPic from './avatars/spring.jpg'

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
    }
};

const { angular, aurelia, dialogflow, java, node, python, jquery, spring } = LANGUAGES;

// TODO : add ref and images for the langages
const EXPERIENCES = [
    {
        title: 'Analyse et traitement de données',
        context: 'Projet pour le CEA',
        period: { begin: 'août 2018', end: 'maintenant'},
        languages: [python, angular], // TODO: add django ?
        description: 'Développeur full stack sur un projet d\'analyse et de traitements de données pour le CEA. Utilisation du framework django.',
    },{
        title: 'Chatbot',
        context: 'Stage de fin d\'études',
        period: { begin: 'février 2018', end: 'juillet 2018'},
        languages: [angular, node, java, spring],
        description: 'Développement d\'un chatbot pour les candidats et les collaborateurs de SII Bordeaux. Utilisation de l\'outil Dialogflow',
        website: {
            title: 'Groupe SII',
            href: 'http://www.groupe-sii.com/fr',
        },
    },{
        title: 'digitalQuizz',
        context: 'Stage de seconde année d\'école d\'ingénieur',
        period: { begin: 'mai 2017', end: 'septembre 2017'},
        languages: [aurelia, jquery, java],
        description: 'Stage de 3 mois dans la société Multimédia SOLUTIONS à Cestas. Développement d\'une application web de questionnaires dématérialisés.',
        website: {
            title: 'Multimédia SOLUTIONS',
            href: 'https://www.lug.com/',
        },
    },
];

export default EXPERIENCES;

