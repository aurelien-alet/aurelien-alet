import enseirbPic from './images/enseirb-matmeca.PNG'

const SCHOOLS = [
    {
        period: {begin:'2015', end:'2018'},
        title: 'Formation d\'ingénieur en informatique',
        description: 'Bordeaux INP - ENSEIRB-MATMECA',
        city: 'Talence',
        website: {
            title: 'ENSEIRB - MATMECA',
            href: 'https://enseirb-matmeca.bordeaux-inp.fr/',
        }, 
        image: {
            title: 'ENSEIRB - MATMECA',
            picture: enseirbPic,
            website: 'https://enseirb-matmeca.bordeaux-inp.fr/',
        },
    },{
        period: {begin:'2013', end:'2015'},
        title: 'Classe préparatoire MPSI-MP',
        description: 'Lycée la Borde Basse',
        city: 'Castres',
    },{
        period: {begin:'2010', end:'2013'},
        title: 'Baccalauréat Scientifique',
        description: 'Lycée Ferdinand Foch',
        city: 'Rodez',
    },
];

const SELF_LEARNING = [
    {
        title: 'MOOC Python: Des fondamentaux aux concepts avancés du langage',
        image: '', //TODO: add images
        description: 'Apprentissages de concepts avancés de Python3 et utilisation des librairies Numpy et Pandas.',
    },
    {
        title: 'React',
        image: '',
        description: 'Apprentissage de la bibliothèque Javascript React.',
    }
];

export default { SCHOOLS, SELF_LEARNING, };
//export const SCHOOLS;