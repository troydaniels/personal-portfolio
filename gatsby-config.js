const config = require('./data/config');

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
	siteMetadata: {
		title: config.defaultTitle,
		description: config.defaultDescription,
		author: config.author,
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-styled-components',
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-source-graphql',
			options: {
				typeName: 'GitHub',
				fieldName: 'github',
				url: 'https://api.github.com/graphql',
				headers: {
					Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
				},
				fetchOptions: {},
			},
		},
		{
			resolve: 'gatsby-plugin-nprogress',
			options: {
				color: config.themeColor,
				showSpinner: false,
			},
		},
		{
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				trackingId: config.googleAnalyticsID,
				head: true,
			},
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: config.defaultTitle,
				short_name: 'portfolio',
				start_url: '/',
				background_color: config.backgroundColor,
				theme_color: config.themeColor,
				display: 'minimal-ui',
                icon: './static/favicon/favicon-512.png',
            },
        },
        'gatsby-plugin-offline',
    ],
};
