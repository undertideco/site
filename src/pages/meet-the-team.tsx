import fs from 'fs';
import * as matter from 'gray-matter';
import orderBy from 'lodash/orderBy';
import { GetStaticProps } from 'next';
import path from 'path';
import React, { useMemo } from 'react';
import styled from 'styled-components';
import { breakpoint } from 'styled-components-breakpoint';

import BodyText from '../components/body-text';
import LargeTitle from '../components/large-title';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import TeamMember from '../components/TeamMember';

const Wrapper = styled.div`
  padding: 32px 21px;

  ${breakpoint('tablet')`
       padding: .5rem 3rem;
   `}
`;

const TeamMembersContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 32px;
  padding: 32px 0;

  ${breakpoint('tablet')`
     grid-template-columns: 1fr 1fr 1fr;
     padding: 42px 0;
     row-gap: 42px;
     width: 85%
   `}

  ${breakpoint('desktop')`
     width: 50%
   `}

   width: 100%;
  margin: 0 auto;
`;

interface Props {
  teamMembers: {
    name: string;
    bio: string;
    avatar: string;
    social: {
      url: string;
    }[];
    founder?: boolean;
  }[];
}

const TeamPage: React.FC<Props> = function(props) {
  const { teamMembers } = props;

  const teamMembersSorted: Props['teamMembers'] = useMemo(
    () => orderBy(teamMembers, ['founder', 'name'], ['asc', 'desc']),
    [teamMembers]
  );

  return (
    <Layout>
      <SEO title="Team" />
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
          {teamMembersSorted.map(teamMember => (
            <TeamMember key={teamMember.name} member={teamMember} />
          ))}
        </TeamMembersContainer>
      </Wrapper>
    </Layout>
  );
};

export default TeamPage;

export const getStaticProps: GetStaticProps = async () => {
  const teamMembersDir = path.join(process.cwd(), 'content/team_members');

  const files = fs
    .readdirSync(teamMembersDir)
    .filter(file => file.endsWith('.md'));

  const teamMembers = [];

  for (const file of files) {
    const { default: fileData } = await import(
      `../../content/team_members/${file}`
    );
    const parsedData = matter(fileData);

    teamMembers.push(parsedData.data);
  }

  return { props: { teamMembers } };
};
