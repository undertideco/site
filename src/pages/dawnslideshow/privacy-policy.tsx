import { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';
import { breakpoint } from 'styled-components-breakpoint';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

const Wrapper = styled.div`
  padding: 32px 21px;

  ${breakpoint('tablet')`
      padding: .5rem 3rem;
  `}
`;

const PrivacyPolicyPage: NextPage = function () {
  return (
    <Layout>
      <SEO title="DawnSlideshow Privacy Policy" />
      <Wrapper>
        <h1 id="dawnslideshow-privacy-policy">DawnSlideshow Privacy Policy</h1>
        <p>
          <strong>Privacy Policy</strong>
        </p>
        <p>
          Undertide LLP built the DawnSlideshow app as a{' '}
          <a href="#">commercial</a> app. This SERVICE is provided by Undertide
          LLP at no cost and is intended for use as is.
        </p>
        <p>
          This page is used to inform visitors regarding our policies with the
          collection, use, and disclosure of Personal Information if anyone
          decided to use our Service.
        </p>
        <p>
          If you choose to use our Service, then you agree to the collection and
          use of information in relation to this policy. The Personal
          Information that we collect is used for providing and improving the
          Service. We will not use or share your information with anyone except
          as described in this Privacy Policy.
        </p>
        <p>
          The terms used in this Privacy Policy have the same meanings as in our
          Terms and Conditions, which is accessible at DawnSlideshow unless
          otherwise defined in this Privacy Policy.
        </p>
        <p>
          <strong>Information Collection and Use</strong>
        </p>
        <p>
          For a better experience, while using our Service, we may require you
          to provide us with certain personally identifiable information. The
          information that we request will be retained by us and used as
          described in this privacy policy.
        </p>
        <p>
          <strong>Log Data</strong>
        </p>
        <p>
          We want to inform you that whenever you use our Service, in a case of
          an error in the app we collect data and information (through third
          party products) on your phone called Log Data. This Log Data may
          include information such as your device Internet Protocol (“IP”)
          address, device name, operating system version, the configuration of
          the app when utilizing our Service, the time and date of your use of
          the Service, and other statistics.
        </p>
        <p>
          <strong>Security</strong>
        </p>
        <p>
          We value your trust in providing us your Personal Information, thus we
          are striving to use commercially acceptable means of protecting it.
          But remember that no method of transmission over the internet, or
          method of electronic storage is 100% secure and reliable, and we
          cannot guarantee its absolute security.
        </p>
        <p>
          <strong>Links to Other Sites</strong>
        </p>
        <p>
          This Service may contain links to other sites. If you click on a
          third-party link, you will be directed to that site. Note that these
          external sites are not operated by us. Therefore, we strongly advise
          you to review the Privacy Policy of these websites. We have no control
          over and assume no responsibility for the content, privacy policies,
          or practices of any third-party sites or services.
        </p>
        <p>
          <strong>Children’s Privacy</strong>
        </p>
        <p>
          These Services do not address anyone under the age of 13. We do not
          knowingly collect personally identifiable information from children
          under 13. In the case we discover that a child under 13 has provided
          us with personal information, we immediately delete this from our
          servers. If you are a parent or guardian and you are aware that your
          child has provided us with personal information, please contact us so
          that we will be able to do necessary actions.
        </p>
        <p>
          <strong>Changes to This Privacy Policy</strong>
        </p>
        <p>
          We may update our Privacy Policy from time to time. Thus, you are
          advised to review this page periodically for any changes. We will
          notify you of any changes by posting the new Privacy Policy on this
          page.
        </p>
        <p>This policy is effective as of 2023-06-21.</p>
        <p>
          <strong>Contact Us</strong>
        </p>
        <p>
          If you have any questions or suggestions about our Privacy Policy, do
          not hesitate to contact us at dawnslideshow@undertide.co.
        </p>
      </Wrapper>
    </Layout>
  );
};

export default PrivacyPolicyPage;