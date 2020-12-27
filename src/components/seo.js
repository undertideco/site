/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { resolve } from 'url';
import config from '../config';

function SEO({ description, lang, meta, title }) {
  const { siteMetadata } = config;

  const metaDescription = description || siteMetadata.description;

  const jsonLDSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Undertide Apps',
    description: metaDescription,
    url: siteMetadata.siteUrl,
    logo: resolve(siteMetadata.siteUrl, 'logo-meta.png'),
    sameAs: [
      'https://in.linkedin.com/company/undertide-apps',
      'https://twitter.com/undertideco',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hello@undertide.co',
    },
  };

  return (
    <Head>
      <title>
        {title} |
{siteMetadata.title}
      </title>
      <meta name="description" content={metaDescription} />
      <meta
        name="og:title"
        content={`Make your ideas a reality. | ${siteMetadata.title}`}
      />
      <meta name="og:description" content={metaDescription} />
      <meta name="og:type" content="website" />
      <meta
        name="og:image"
        content={resolve(siteMetadata.siteUrl, 'logo-meta.png')}
      />
      <meta name="og:url" content={siteMetadata.siteUrl} />
      <meta name="twitter:card" content={metaDescription} />
      <meta
        name="twitter:image"
        content={resolve(siteMetadata.siteUrl, 'logo-meta.png')}
      />
      <meta name="twitter:creator" content={siteMetadata.author} />
      <meta name="twitter:url" content={siteMetadata.siteUrl} />
      <meta
        name="twitter:title"
        content={`Make your ideas a reality. | ${siteMetadata.title}`}
      />
      <meta name="twitter:description" content={metaDescription} />
      <script type="application/ld+json">{JSON.stringify(jsonLDSchema)}</script>
    </Head>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
