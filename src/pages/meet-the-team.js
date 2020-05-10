import React, { useMemo } from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import LargeTitle from '../components/large-title';
import BodyText from '../components/body-text';
import SEO from '../components/seo';
import TeamMember from '../components/TeamMember';

const Wrapper = styled.div`
  padding: 32px 21px;

  ${breakpoint('tablet')`
      padding: .5rem 3rem;
  `}
`;

const TeamMembersContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 32px;
  padding: 32px 0;

  ${breakpoint('tablet')`
    grid-template-columns: 1fr 1fr;
  padding: 48px 0;
  row-gap: 48px;
  `}

  margin: 0 auto;
  max-width: 800px;
`;

function MeetTheTeamPage() {
  const { allAuthor: authors } = useStaticQuery(graphql`
    query {
      allAuthor {
        edges {
          node {
            id
            name
            bio
            avatar {
              childImageSharp {
                fluid(quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            founder
          }
        }
      }
    }
  `);

  const membersSorted = useMemo(
    () =>
      [...authors.edges].sort((a, b) => {
        const nameA = a.node.name.toUpperCase();
        const nameB = b.node.name.toUpperCase();

        if (b.node.founder) {
          return 1;
        }
        if (a.node.founder && !b.node.founder) {
          return 1;
        }

        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        return 0;
      }),
    [authors]
  );

  return (
    <Layout>
      <SEO title="Meet the Team" />
      <Wrapper>
        <LargeTitle>Meet the Team</LargeTitle>
        <BodyText>
          Undertide is not just another agency based out of Asia only interested
          in speed and getting paid. We are a collective of crafts-people -
          developers and designers alike - with extensive software engineering
          experience from fast-growing startups to ones that have risen and
          fallen.
        </BodyText>
        <BodyText>
          Pooling together our extensive experiences and skill-sets, we are the
          finest example of the whole being greater than the sum of its parts.
        </BodyText>
        <TeamMembersContainer>
          {membersSorted.map(edge => (
            <TeamMember member={edge.node} />
          ))}
        </TeamMembersContainer>
      </Wrapper>
    </Layout>
  );
}

export default MeetTheTeamPage;
