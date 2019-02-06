import javaPic from '../img/languages_icons/java.png';
import cPic from '../img/languages_icons/c.png';
import cppPic from '../img/languages_icons/cpp.png';
import phpPic from '../img/languages_icons/php.png';
import lispPic from '../img/languages_icons/lisp.png';
import mongoPic from '../img/languages_icons/mongo.png';
import cassandraPic from '../img/languages_icons/cassandra.png';
import mysqlPic from '../img/languages_icons/mysql.png';

const SECOND_LANGUAGES = [
    {
        title: 'Java',
        picture: javaPic,
        website: 'https://www.java.com/',
		projectNumber: {
			school: 4,
			work: 0,
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

export default { SECOND_LANGUAGES, DATABASES_SKILLS };


