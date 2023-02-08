import React from 'react';
import * as PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import {
    url,
    defaultDescription,
    defaultTitle,
    socialLinks,
    socialImages,
    address,
    contact,
    legalName,
    foundingDate,
    logo,
} from '../../../../data/config';

const SEO = ({ title, description }) => {
    const structuredDataOrganization = `{ 
		"@context": "http://schema.org",
		"@type": "Organization",
		"legalName": "${legalName}",
		"url": "${url}",
		"logo": "${logo}",
		"foundingDate": "${foundingDate}",
		"founders": [{
			"@type": "Person",
			"name": "${legalName}"
		}],
		"contactPoint": [{
			"@type": "ContactPoint",
			"email": "${contact.email}",
			"contactType": "customer service"
		}],
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "${address.city}",
			"addressRegion": "${address.region}",
			"addressCountry": "${address.country}",
			"postalCode": "${address.zipCode}"
		},
		"sameAs": [
			"${socialLinks.twitter}",
			"${socialLinks.linkedin}",
			"${socialLinks.instagram}",
			"${socialLinks.github}"
		]
  	}`;

    return (
        <Helmet>
            <meta name="description" content={description} />
            <meta name="image" content={socialImages.website} />

            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={socialImages.website} />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:creator" content={socialLinks.twitter} />
            <meta name="twitter:site" content={socialLinks.twitter} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image:src" content={socialImages.twitter} />
            <script type="application/ld+json">
                {structuredDataOrganization}
            </script>
            <title>{title}</title>
            <html lang="en" dir="ltr" />
        </Helmet>
    );
};

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
};

SEO.defaultProps = {
    title: defaultTitle,
    description: defaultDescription,
};

export default SEO;
