import angularPic from './avatars/angular.png';
import aureliaPic from './avatars/aurelia.png';
import dialogflowPic from './avatars/dialogflow.jpg';
import javaPic from './avatars/java.png';
import nodePic from './avatars/node.png';
import pythonPic from './avatars/python.png';

const LANGUAGES = {
    angular: {
        title: 'Angular',
        picture: angularPic,
        website: '',
    },
    aurelia: {
        title: 'Aurelia',
        picture: aureliaPic,
        website: '',
    },
    dialogflow: {
        title: 'Dialogflow',
        picture: dialogflowPic,
        website: '',
    },
    java: {
        title: 'Java',
        picture: javaPic,
        website: '',
    },
    node: {
        title: 'Node.js',
        picture: nodePic,
        website: '',
    },
    python: {
        title: 'Python',
        picture: pythonPic,
        website: '',
    },
    jquery: {
        title: 'jQuery',
        picture: null,
        website: '',
    },
    spring: {
        title: 'Spring',
        picture: null,
        website: '',
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
    },{
        title: 'digitalQuizz',
        context: 'Stage de seconde année d\'école d\'ingénieur',
        period: { begin: 'mai 2017', end: 'septembre 2017'},
        languages: [aurelia, jquery, java],
        description: 'Stage de 3 mois dans la société Multimédia SOLUTIONS à Cestas. Développement d\'une application web de questionnaires dématérialisés.',
    },
];

export default EXPERIENCES;

