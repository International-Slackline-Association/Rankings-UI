import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Helmet } from 'react-helmet-async';
import DisciplineSection from './DisciplineSection';
import MainSection from './MainSection';
import styled from 'styled-components/macro';
import { media } from 'styles/media';

interface Props extends RouteComponentProps {}

export function HomePage(props: Props) {
  return (
    <>
      <Helmet>
        <meta name="description" content="Slackline Ranking List" />
      </Helmet>
      <Wrapper>
        <MainSection />
        <DisciplineSection />
      </Wrapper>
    </>
  );
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  ${media.desktop`
    flex-direction: row;
    width: 100vw;
    min-height: 100vh;
  `};
`;
