import conference from '../static/screenshots/oper8tor-conference.png';
import kaldi from '../static/screenshots/kaldi.png';

const projects = [
    {
        name: 'Drawboard PDF & Projects',
        description: 'Collaborative PDF annotation software',
        role: 'Software engineer',
        technologies: ['React', 'Ramda', 'Recompose'],
        mediaType: 'video',
        videoId: '_bhFpHzD9rQ',
        url: 'https://www.drawboard.com/'
    },
    {
        name: 'coreplus',
        description: 'Online practice management system for allied health professionals',
        role: 'Software engineer',
        technologies: ['React', 'Classic ASP', '.NET', 'Microsoft SQL Server'],
        mediaType: 'video',
        videoId: 'UQXYJwMbjt4',
        url: 'https://www.coreplus.com.au/'
    },
    {
        name: 'Oper8tor',
        description: 'Cross platform messaging and calling social application',
        role: 'Software engineer',
        technologies: ['React Native', 'Go', 'MySQL', 'FreeSWITCH'],
        mediaType: 'video',
        videoId: 'Bkw34adPY94',
        url: 'https://oper8tor.com/'
    },
    {
        name: 'Automatic Management Provisioning Tool (AMPT)',
        description:
            'Allows ease of configuration and one-click provisioning of VoIP PBXs',
        role: 'Full stack developer',
        technologies: ['Vue.js', 'Java', 'PostgreSQL'],
        mediaType: 'video',
        videoId: 'gomhmXOWWs4',
    },
    {
        name: 'Oper8tor Conference',
        description:
            'Conferencing platform offering scheduled participant dialing and tagged transcription',
        role: 'Front end developer',
        technologies: ['React', 'Go', 'MySQL', 'FreeSWITCH'],
        mediaType: 'image',
        source: conference,
    },
    {
        name: 'LiveScribe',
        description:
            'A live call full duplex transcription and speech to text engine',
        role: 'Full stack developer',
        technologies: ['Python', 'C++', 'Kaldi', 'GStreamer', 'Docker'],
        mediaType: 'image',
        source: kaldi,
    },
];

export default projects;
