import javaPic from '../img/languages_icons/java.png';
import cPic from '../img/languages_icons/c.png';
import cppPic from '../img/languages_icons/cpp.png';
import phpPic from '../img/languages_icons/php.png';
import lispPic from '../img/languages_icons/lisp.png';
import mongoPic from '../img/languages_icons/mongo.png';
import cassandraPic from '../img/languages_icons/cassandra.png';
import mysqlPic from '../img/languages_icons/mysql.png';
import javascriptPic from '../img/languages_icons/javascript.png';
import pythonPic from '../img/languages_icons/python.png';
import angularPic from '../img/languages_icons/angular.png';
import reactPic from '../img/languages_icons/react.png';
import nodePic from '../img/languages_icons/node.png';
import djangoPic from '../img/languages_icons/django.png';
import numpyPic from '../img/languages_icons/numpy.png';


const FRONT_END_SKILLS = {
	title: 'Front-End',
	principalLanguage: {
		title: 'JavaScript',
		website: '',
		picture: javascriptPic
	},
	libraries: [
		{
			title: 'Angular',
			website: '',
			picture: angularPic,
			projectNumber: {
				school: 0,
				work: 2,
			},
		},
		{
			title: 'React',
			website: '',
			picture: reactPic,
			projectNumber: {
				school: 0,
				work: 0,
			},
		},
		{
			title: 'Node.js',
			website: '',
			picture: nodePic,
			projectNumber: {
				school: 0,
				work: 1,
			},
		},
	],
	projectNumber: {
		school: 0,
		work: 3,
		personnal: 1,
	},
};

const BACK_END_SKILLS = {
	title: 'Back-End',
	principalLanguage: {
		title: 'Python',
		website: '',
		picture: pythonPic
	},
	libraries: [
		{
			title: 'Django',
			website: '',
			picture: djangoPic,
			projectNumber: {
				school: 0,
				work: 1,
			},
		},
		{
			title: 'Numpy',
			website: '',
			picture: numpyPic,
			projectNumber: {
				school: 0,
				work: 0,
			},
		},
	],
	projectNumber: {
		school: 2,
		work: 1,
		personnal: 0,
	},
};


const SECOND_LANGUAGES = [
    {
        title: 'Java',
        picture: javaPic,
        website: 'https://www.java.com/',
		projectNumber: {
			school: 4,
			work: 1,
		},
    },
	{
        title: 'C',
        picture: cPic,
        website: 'https://devdocs.io/c/',
		projectNumber: {
			school: 5,
			work: 0,
		},
    },
	{
        title: 'C++',
        picture: cppPic,
        website: 'https://devdocs.io/cpp/',
		projectNumber: {
			school: 0,
			work: 0,
		},    
	},
	{
        title: 'PHP',
        picture: phpPic,
        website: 'http://www.php.net',
		projectNumber: {
			school: 0,
			work: 0,
		},
    },
	{
        title: 'Lisp',
        picture: lispPic,
        website: 'https://lisp-lang.org/',
		projectNumber: {
			school: 1,
			work: 0,
		},
    },
];

const DATABASES_SKILLS = [
	{
        title: 'MongoDB',
        picture: mongoPic,
        website: 'https://www.mongodb.com/',
		projectNumber: {
			school: 0,
			work: 1,
		},
    },
	{
        title: 'Cassandra',
        picture: cassandraPic,
        website: 'http://cassandra.apache.org/',
		projectNumber: {
			school: 0,
			work: 1,
		},
    },
	{
        title: 'MySQL',
        picture: mysqlPic,
        website: 'https://www.mysql.com/',
		projectNumber: {
			school: 1,
			work: 1,
		},
    },
]

export default { FRONT_END_SKILLS, BACK_END_SKILLS, SECOND_LANGUAGES, DATABASES_SKILLS };


