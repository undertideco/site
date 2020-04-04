/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { resolve } from 'url';
import { useStaticQuery, graphql } from 'gatsby';
import favicon16 from '../images/favicons/16x16.png';
import favicon32 from '../images/favicons/32x32.png';
import favicon64 from '../images/favicons/64x64.png';

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  const jsonLDSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Undertide Apps',
    description: metaDescription,
    url: site.siteMetadata.siteUrl,
    logo: resolve(site.siteMetadata.siteUrl, 'logo-meta.png'),
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
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      link={[
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: favicon16,
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: favicon32,
        },
        {
          rel: 'shortcut icon',
          type: 'image/png',
          sizes: '64x64',
          href: favicon64,
        },
      ]}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: `Make your ideas a reality. | ${site.siteMetadata.title}`,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: 'og:image',
          content: resolve(site.siteMetadata.siteUrl, 'logo-meta.png'),
        },
        {
          name: 'og:url',
          content: site.siteMetadata.siteUrl,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: 'twitter:image',
          content: resolve(site.siteMetadata.siteUrl, 'logo-meta.png'),
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: 'twitter:url',
          content: site.siteMetadata.siteUrl,
        },
        {
          name: `twitter:title`,
          content: `Make your ideas a reality. | ${site.siteMetadata.title}`,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
      <script type="application/ld+json">{JSON.stringify(jsonLDSchema)}</script>
    </Helmet>
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
