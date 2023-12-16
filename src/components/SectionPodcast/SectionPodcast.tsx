import React from 'react';
import styles from './sectionpodcast.css';
import { Container } from '../Container';
import { TitleH2 } from '../TitleH2';
import styled from 'styled-components';

const podcasts = [
  {
    time: '15:43',
    title: 'Европа. XIX век',
    author: 'Дмитрий Гутенберг',
    date: '14 июня',
    bgImg: '../img/podcast-europe-112.png',
  },
  {
    time: '5:32',
    title: 'О музыке',
    author: 'Дмитрий Гутенберг',
    date: '11 июня',
    bgImg: '../img/podcast-abt-music-112.png',
  },
  {
    time: '8:54',
    title: 'Люди сегодня',
    author: 'Анна Васильева',
    date: '8 июня',
    bgImg: '../img/podcast-ppl-112.png',
  },
  {
    time: '9:04',
    title: 'Хэллоу, Африка!',
    author: 'Пётр Дмитриевский ',
    date: '5 июня',
    bgImg: '../img/podcast-hello-112.png',
  },
  {
    time: '7:03',
    title: 'Обо всём',
    author: 'Пётр Дмитриевский',
    date: '2 июня',
    bgImg: '../img/podcast-abt-evrg-112.png',
  },
  {
    time: '9:15',
    title: 'Физика цвета',
    author: 'Татьяна Флеганова ',
    date: '28 мая',
    bgImg: '../img/podcast-physics-112.png',
  },
  {
    time: '16:04',
    title: 'Источник звука',
    author: 'Пётр Дмитриевский',
    date: '22 мая',
    bgImg: '../img/podcast-src-voice-112.png',
  },
  {
    time: '6:55',
    title: 'Правила этикета',
    author: 'Татьяна Флеганова',
    date: '18 мая',
    bgImg: '../img/podcast-rules-112.png',
  },
];

export function SectionPodcast() {
  const TitleH2Podcast = styled(TitleH2)`
    margin-bottom: 30px;
    @media (max-width: 400px) {
      margin-bottom: 20px;
    }
  `;

  const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    @media (max-width: 1023px) {
      grid-template-columns: 1fr;
      // gap: 0px;
    }
  `;

  const ListItem = styled.li<{ bgImg: string }>`
    position: relative;
    padding: 35px 0 38px 142px;
    //width: 100%;
    // min-height: 140px;
    background-color: #fff;
    background-repeat: no-repeat;
    background-image: url(${(props) => props.bgImg});
    @media (max-width: 1023px) {
      // width: 100%;
    }
    @media (max-width: 400px) {
      padding: 97px 0px 28px 16px;
      height: 100%;
      background-size: 100% auto;
    }
    &:focus-visible {
      outline: 1px solid #6d31ee;
    }
  `;

  const Time = styled.span`
    color: #121723;
    font-family: 'Muller-Reg', 'sans-serif';
    font-size: 12px;
  `;

  const TitleH3 = styled.h3`
    padding-top: 5px;
    color: #121723;
    font-family: 'Muller-Reg', 'sans-serif';
    font-size: 20px;
    @media (max-width: 400px) {
      padding-top: 6.5px;
      font-size: 16px;
      line-height: normal;
    }
  `;

  const Author = styled.span`
    color: #a1a6b4;
    font-family: 'Muller-Reg', 'sans-serif';
    font-size: 16px;
    @media (max-width: 400px) {
      font-size: 12px;
    }
  `;

  const Date = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 3px 6px 1px 6px;
    min-width: 51px;
    background-color: #e6e8ec;
    color: #121723;
    text-align: center;
    font-family: 'Muller-Reg', 'sans-serif';
    font-size: 10px;
    @media (max-width: 400px) {
      top: 0;
      bottom: auto;
      padding: 3px 6px 2px 6px;
    }
  `;

  return (
    <section style={{ background: '#e6e8ec' }}>
      <Container>
        <TitleH2Podcast>Подкасты</TitleH2Podcast>

        <List>
          {podcasts.map(({ time, title, author, date, bgImg }) => (
            <ListItem bgImg={bgImg}>
              <Time>{time}</Time>
              <TitleH3>{title}</TitleH3>
              <Author>{author}</Author>
              <Date>{date}</Date>
            </ListItem>
          ))}
        </List>
      </Container>
    </section>
  );
}
