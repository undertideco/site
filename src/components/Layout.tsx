import React from 'react';

import config from '../config';
import Footer from './footer';
import Header from './header';

const Layout: React.FC<React.PropsWithChildren> = function (props) {
  const { children } = props;

  return (
    <>
      <Header siteTitle={config.siteMetadata.title} />
      <>
        <main>{children}</main>
        <Footer />
      </>
    </>
  );
};

export default Layout;
