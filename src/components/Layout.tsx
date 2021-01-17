import PropTypes from 'prop-types';
import React from 'react';

import config from '../config';
import Footer from './footer';
import Header from './header';

const Layout: React.FC = function(props) {
  const { children } = props;

  return (
    <>
      <Header siteTitle={config.siteMetadata.siteTitle} />
      <>
        <main>{children}</main>
        <Footer />
      </>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
