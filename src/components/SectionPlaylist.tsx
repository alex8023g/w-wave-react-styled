import React from 'react';
import styled from 'styled-components';
import { Container } from './Container';
import { TitleH2 } from './TitleH2';

const ContainerPlaylist = styled(Container)`
  padding-bottom: 60px;
  @media (max-width: 1023px) {
    padding-bottom: 77px;
  }
  @media (max-width: 767px) {
    padding-bottom: 22px;
  }
`;

const GeneralWrap = styled.div`
  position: relative;
  top: -34px;
  display: flex;
  @media (max-width: 1139px) {
    flex-direction: column;
  }
`;

const DescriptionWrap = styled.div`
  margin-right: 30px;
  padding-top: 46px;
  max-width: 350px;
  @media (max-width: 1139px) {
    max-width: none;
  }
`;

const DescriptionP = styled.p`
  color: #a1a6b4;
  font-family: 'Muller-Reg', 'sans-serif';
  font-size: 16px;
  line-height: 22px;
  @media (max-width: 767px) {
    font-size: 12px;
    line-height: 16px; /* 133.333% */
  }
`;

const Copyright = styled.p`
  margin-bottom: 5px;
  color: #a1a6b4;
  font-family: 'Muller-Reg-Italic', 'sans-serif';
  font-size: 16px;
  font-weight: 300;
  line-height: 22px;
  @media (max-width: 767px) {
    font-size: 12px;
  }
`;

const Img18 = styled.img`
  @media (max-width: 1139px) {
    margin-bottom: 28px;
  }
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 30px;
  @media (max-width: 1139px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 1023px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 767px) {
    gap: 30px 29px;
  }
`;

const playlist = [
  {
    href: '#',
    flagSrc: 'img/playlist/rus.png',
    imgSrc1: 'img/playlist/1-160.png',
    imgSrc2: 'img/playlist/1-112.png',
    title: 'Ploho',
    text: '3 последних альбома',
  },
  {
    href: '#',
    flagSrc: 'img/playlist/rus.png',
    imgSrc1: 'img/playlist/2-160.png',
    imgSrc2: 'img/playlist/2-112.png',
    title: 'Molchat Doma',
    text: 'Все песни',
  },
  {
    href: '#',
    flagSrc: 'img/playlist/rus.png',
    imgSrc1: 'img/playlist/3-160.png',
    imgSrc2: 'img/playlist/3-112.png',
    title: 'Motorama',
    text: 'Все синглы',
  },
  {
    href: '#',
    flagSrc: 'img/playlist/rus.png',
    imgSrc1: 'img/playlist/4-160.png',
    imgSrc2: 'img/playlist/4-112.png',
    title: 'Human Tetris',
    text: '3 последних альбома',
  },
  {
    href: '#',
    flagSrc: 'img/playlist/rus.png',
    imgSrc1: 'img/playlist/5-160.png',
    imgSrc2: 'img/playlist/5-112.png',
    title: 'Буерак',
    text: 'Все ЕР',
  },
  {
    href: '#',
    flagSrc: 'img/playlist/rus.png',
    imgSrc1: 'img/playlist/6-160.png',
    imgSrc2: 'img/playlist/6-112.png',
    title: 'Июльские дни',
    text: 'Альбом колокол',
  },
  {
    href: '#',
    flagSrc: 'img/playlist/uk.png',
    imgSrc1: 'img/playlist/7-160.png',
    imgSrc2: 'img/playlist/7-112.png',
    title: 'Joy Division',
    text: 'Лучшее за все время',
  },
  {
    href: '#',
    flagSrc: 'img/playlist/uk.png',
    imgSrc1: 'img/playlist/8-160.png',
    imgSrc2: 'img/playlist/8-112.png',
    title: 'The Cure',
    text: 'Лучшее за все время',
  },
  {
    href: '#',
    flagSrc: 'img/playlist/uk.png',
    imgSrc1: 'img/playlist/9-160.png',
    imgSrc2: 'img/playlist/9-112.png',
    title: 'The Smiths',
    text: 'Период 1984-1988',
  },
  {
    href: '#',
    flagSrc: 'img/playlist/uk.png',
    imgSrc1: 'img/playlist/10-160.png',
    imgSrc2: 'img/playlist/10-112.png',
    title: 'New Order',
    text: 'Хиты',
  },
  {
    href: '#',
    flagSrc: 'img/playlist/uk.png',
    imgSrc1: 'img/playlist/11-160.png',
    imgSrc2: 'img/playlist/11-112.png',
    title: 'Bauhaus',
    text: 'Все синглы',
  },
  {
    href: '#',
    flagSrc: 'img/playlist/uk.png',
    imgSrc1: 'img/playlist/12-160.png',
    imgSrc2: 'img/playlist/12-112.png',
    title: 'Gang Of Four',
    text: '3 последних альбома',
  },
];

const Card = styled.a`
  position: relative;
  @media (max-width: 1139px) {
    display: flex;
  }
  @media (max-width: 767px) {
    display: block;
  }
  &:hover h3 {
    color: #6d31ee;
  }
  &:focus-visible {
    border: 1px solid #6d31ee;
    outline: none;
  }
  &:focus h3 {
    color: #6d31ee;
  }
  &:active h3 {
    color: #4f28a5;
  }
`;

const Flag = styled.img`
  position: absolute;
  right: 0;
  @media (max-width: 1139px) {
    right: auto;
    left: 0;
  }
  @media (max-width: 400px) {
    right: 0;
    left: auto;
  }
`;

const Picture = styled.picture`
  margin-right: 0;
  @media (max-width: 1139px) {
    min-width: 112px;
    min-height: 112px;
  }
`;

const CardBottom = styled.div`
  padding: 15px 16px;
  border: 1px solid #e6e8ec;
  @media (max-width: 1139px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
    padding: 2px 2px 2px 10px;
  }
  @media (max-width: 767px) {
    display: block;
    padding: 8px 2px 8px 10px;
    max-width: 146px;
  }
`;

const CardTitleH3 = styled.h3`
  margin-bottom: 4px;
  color: #121723;
  font-family: 'Muller-Medium', 'sans-serif';
  font-size: 16px;
  line-height: normal;
  transition: color 0.3s ease-in-out;
  @media (max-width: 767px) {
    margin-bottom: 6px;
    font-size: 12px;
  }
`;

const CardP = styled.p`
  color: #a1a6b4;
  font-family: 'Muller-Reg', 'sans-serif';
  font-size: 12px;
  line-height: normal;
  @media (max-width: 767px) {
    font-size: 9px;
  }
`;
export function SectionPlaylist() {
  return (
    <section id='playlist-sec'>
      <ContainerPlaylist>
        <TitleH2>Плейлисты</TitleH2>
        <GeneralWrap>
          <DescriptionWrap>
            <DescriptionP>
              Раздел «Плейлисты» может содержать информацию, не предназначенную
              для несовершеннолетних
            </DescriptionP>
            <Copyright>© 2021 | W-Wave</Copyright>
            <Img18 src='img/playlist/18.svg' />
          </DescriptionWrap>
          <List>
            {playlist.map(({ href, flagSrc, imgSrc1, imgSrc2, title, text }) => (
              <li key={title}>
                <Card href={href}>
                  <Flag src={flagSrc} />
                  <Picture>
                    <source srcSet={imgSrc1} media='(min-width: 1140px)' />
                    <source srcSet={imgSrc2} media='(min-width: 768px)' />
                    <img style={{ display: 'block' }} src={imgSrc1} alt='' />
                  </Picture>
                  <CardBottom>
                    <CardTitleH3>{title}</CardTitleH3>
                    <CardP>{text}</CardP>
                  </CardBottom>
                </Card>
              </li>
            ))}
          </List>
        </GeneralWrap>
      </ContainerPlaylist>
    </section>
  );
}
