import React from 'react';
import styles from './sectionhero.css';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 0 auto;
  padding: 90px 15px 94px 15px;
  max-width: 1140px;
  background-image: url('../img/microphone.png');
  background-repeat: no-repeat;
  background-position: right 15px bottom 40px;
  @media (max-width: 1139px) {
    padding: 90px 100px;
    background-image: url('../img/microphone-1024.png');
    background-position: right 100px bottom 90px;
  }
  @media (max-width: 1023px) {
    padding: 90px 115px;
    background-image: none;
  }
  @media (max-width: 767px) {
    padding: 40px 32px;
  }
`;

const TitleH1 = styled.h1`
  margin-bottom: 15px;
  color: #121723;
  font-family: 'Muller-Bold', 'sans-serif';
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  @media (max-width: 1139px) {
    margin-bottom: 16px;
  }
  @media (max-width: 767px) {
    margin-bottom: 7px;
    font-size: 32px;
  }
`;

const Span = styled.span`
  color: #121723;
  font-family: 'Muller-Reg-Italic', 'sans-serif';
  font-size: 60px;
  font-weight: 400;
  line-height: 100%;
  @media (max-width: 767px) {
    font-size: 32px;
  }
`;

const Paragraph = styled.p`
  margin-bottom: 45px;
  max-width: 600px;
  color: #121723;
  font-family: 'Muller-Reg', 'sans-serif';
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  @media (max-width: 1139px) {
    margin-bottom: 20px;
    max-width: 550px;
  }
  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

const Button = styled.button`
  padding: 25px 54px;
  color: #fff;
  text-align: center;
  font-family: 'Muller-Medium', 'sans-serif';
  font-size: 20px;
  font-weight: 500;
  line-height: normal;
  border-radius: 40px;
  background: #6d31ee;
  &:hover {
    background: #aa9dfa;
  }
  @media (max-width: 767px) {
    margin-bottom: 1px;
    padding: 17px 45px 17px 45px;
    font-size: 16px;
  }
  &:focus-visible {
    padding: 23px 52px;
    border: 2px solid #4f28a5;
    background: #aa9dfa;
  }
  &:active {
    background: #4f28a5;
  }
`;

export function SectionHero() {
  return (
    <Section id='hero'>
      <TitleH1>
        Радио <Span>W-Wave</Span>
      </TitleH1>
      <Paragraph>
        Привет, на связи W-Wave! Раньше мы были изданием, а теперь пробуем себя
        в&nbsp;разговорном жанре. Говорим о музыке, политике, истории, науке и культуре.
        Здесь, помимо прямого эфира — архив передач и многое другое:)
      </Paragraph>
      <Button>Слушать эфир</Button>
    </Section>
  );
}
