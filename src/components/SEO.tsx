import Head from 'next/head';
import React from 'react';
import { Organization, Thing, WithContext } from 'schema-dts';

import config from '../config';

const { siteMetadata } = config;

interface Props {
  lang?: string;
  description?: string;
  title: string;
  image?: string;
  schemas?: Thing[];
}

const SEO: React.FC<Props> = function (props) {
  const { description, title, image } = props;
  const schemas = props.schemas ?? [];

  const metaDescription = description || siteMetadata.description;

  const logoURL = new URL('logo-meta.png', siteMetadata.siteUrl).toString();

  const schemaOrg: WithContext<Organization> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Undertide Apps',
    description: metaDescription,
    url: siteMetadata.siteUrl,
    logo: logoURL,
    sameAs: [
      'https://in.linkedin.com/company/undertide-apps',
      'https://twitter.com/undertideco',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: siteMetadata.contact,
    },
  };

  return (
    <Head>
      <title>
        {title} | {siteMetadata.title}
      </title>
      <meta name="description" content={metaDescription} />
      <meta
        name="og:title"
        content={`Make your ideas a reality. | ${siteMetadata.title}`}
      />
      <meta name="og:description" content={metaDescription} />
      <meta name="og:type" content="website" />
      <meta name="og:image" content={image ?? logoURL} />
      <meta name="og:url" content={siteMetadata.siteUrl} />
      <meta name="twitter:card" content={metaDescription} />
      <meta name="twitter:image" content={image ?? logoURL} />
      <meta name="twitter:creator" content={siteMetadata.author} />
      <meta name="twitter:url" content={siteMetadata.siteUrl} />
      <meta
        name="twitter:title"
        content={`Make your ideas a reality. | ${siteMetadata.title}`}
      />
      <meta name="twitter:description" content={metaDescription} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      {schemas.map((schema) => {
        const __html = JSON.stringify(schema);

        return (
          <script
            key={__html}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html }}
          />
        );
      })}
    </Head>
  );
};

export default SEO;
