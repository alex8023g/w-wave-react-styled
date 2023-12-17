import React from 'react';
import { Container } from './Container';
import styled from 'styled-components';
import { TitleH2 } from './TitleH2';

const broadcasts = [
  {
    title: 'О людях и книгах',
    text: 'Анонсируется отдельно',
    href: '#',
    imgSrc: '/img/broadcast/abt-ppl-113.png',
    imgSrc2: '/img/broadcast/abt-ppl-255.png',
  },
  {
    title: 'Графомания',
    text: 'По понедельникам в 10:00',
    href: '#',
    imgSrc: '../img/broadcast/graphoman-113.png',
    imgSrc2: '../img/broadcast/graphoman-255.png',
  },
  {
    title: 'Не Рим, не Троя',
    text: 'По вторникам в 12:00',
    href: '#',
    imgSrc: '../img/broadcast/not-rome-113.png',
    imgSrc2: '../img/broadcast/not-rome-255.png',
  },
  {
    title: 'Эрудит',
    text: 'По пятницам в 17:00',
    href: '#',
    imgSrc: '../img/broadcast/erudite-113.png',
    imgSrc2: '../img/broadcast/erudite-255.png',
  },
  {
    title: 'Тонкости эпох',
    text: 'По субботам в 10:00',
    href: '#',
    imgSrc: '../img/broadcast/eras-113.png',
    imgSrc2: '../img/broadcast/eras-255.png',
  },
  {
    title: 'Живые мысли',
    text: 'По воскресеньям в 15:30',
    href: '#',
    imgSrc: '../img/broadcast/life-thouts-113.png',
    imgSrc2: '../img/broadcast/life-thouts-255.png',
  },
];

const ContainerBroadcast = styled(Container)`
  padding-top: 49px;
  @media (max-width: 1023px) {
    padding-bottom: 155px;
  }
  @media (max-width: 610px) {
    padding-top: 30px;
    padding-bottom: 160px;
  }
`;

const TitleH2Broadcast = styled(TitleH2)`
  position: relative;
  top: 45px;
  left: 0;
  @media (max-width: 610px) {
    top: 23px;
  }
`;

const SectionFlexWrap = styled.div`
  display: flex;
  padding-top: 12px;
  @media (max-width: 1023px) {
    flex-direction: column-reverse;
    padding-top: 170px;
  }
  @media (max-width: 610px) {
    padding-top: 53px;
  }
`;

const Archive = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: start;
  margin-right: 30px;
  min-width: 255px;
  @media (max-width: 1139px) {
    flex-grow: 1;
  }
  @media (max-width: 1023px) {
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: end;
    padding: 30px 0;
    width: 100%;
    /* margin-right: 0;
    flex-grow: 1; */
    border-top: 1px solid #e6e8ec;
  }
  @media (max-width: 610px) {
    padding: 30px 10px 55px 10px;
  }
`;

const MicImg = styled.img`
  margin-bottom: 24px;
  @media (max-width: 1023px) {
    margin-bottom: 0;
    margin-right: 23px;
    width: 70px;
    height: 96px;
  }
  @media (max-width: 610px) {
    margin-right: 13px;
    width: 77px;
    height: 105px;
  }
`;

const ArchiveWrap = styled.div`
  @media (max-width: 610px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: start;
  }
`;

const ArchiveButton = styled.button`
  margin-bottom: 11px;
  padding: 10px 54px;
  color: #121723;
  border: 2px solid #121723;
  border-radius: 77px;
  font-family: 'Muller-Medium', 'sans-serif';
  font-size: 16px;
  line-height: normal;
  background-color: #fff;
  @media (max-width: 1139px) {
    margin-bottom: 12px;
  }
  @media (max-width: 1023px) {
    margin-bottom: 8px;
  }
  @media (max-width: 610px) {
    margin-bottom: 0;
    padding: 8px 30px;
  }
  &:hover {
    color: #fff;
    border: 2px solid #aa9dfa;
    background: #aa9dfa;
  }
  &:focus-visible {
    color: #fff;
    outline: 1px solid #6d31ee;
    background: #aa9dfa;
  }
  &:active {
    color: #fff;
    border: 1px solid #6d31ee;
    background: #6d31ee;
  }
`;

const Paragraph = styled.p`
  margin-bottom: 0px;
  color: #a1a6b4;
  font-family: 'Muller-Reg', 'sans-serif';
  font-size: 16px;
  line-height: 150%;
  @media (max-width: 1139px) {
    margin-bottom: 0;
  }
  @media (max-width: 1023px) {
    max-width: 255px;
  }
  @media (max-width: 610px) {
    margin-bottom: 5px;
    font-size: 14px;
  }
`;

const BroadcastsWrap = styled.div`
  @media (max-width: 1023px) {
    margin-bottom: 61px;
  }
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  @media (max-width: 1139px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 610px) {
    gap: 31px 30px;
  }
`;

const ListItem = styled.li`
  @media (max-width: 610px) {
    display: flex;
    min-height: 148px;
  }
`;

const Card = styled.div<{ imgsrc: string; imgsrc2: string }>`
  padding-top: 148px;
  width: 255px;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.imgsrc2});
  // background-size: 100%;
  @media (max-width: 1023px) {
    margin: 0 auto;
  }
  @media (max-width: 610px) {
    display: flex;
    padding-top: 50px;
    width: 113px;
    background-repeat: no-repeat;
      background-image: url(${(props) => props.imgsrc});
  }
  @media (max-width: 610px) {

`;

const CardBottom = styled.div`
  padding: 18px 16px 18px 16px;
  border: 1px solid #e6e8ec;
  @media (max-width: 1139px) {
    padding: 18px 16px 19px 15px;
  }
  @media (max-width: 610px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 9px 8px 10px 10px;
  }
`;

const TitleH3 = styled.h3`
  margin-bottom: 5px;
  color: #121723;
  font-family: 'Muller-Medium', 'sans-serif';
  font-size: 20px;
  font-weight: 500;
  line-height: normal;
  @media (max-width: 1139px) {
    margin-bottom: 4px;
  }
  @media (max-width: 610px) {
    margin-bottom: 5px;
    font-size: 12px;
  }
`;

const Text = styled.p`
  margin-bottom: 18px;
  color: #a1a6b4;
  font-family: 'Muller-Reg', 'sans-serif';
  font-size: 12px;
  line-height: normal;
  @media (max-width: 610px) {
    flex-grow: 1;
    margin-bottom: 19px;
    font-size: 9px;
  }
`;

const Link = styled.a`
  padding-right: 28px;
  color: #121723;
  font-family: 'Muller-Reg-Italic', 'sans-serif';
  font-size: 16px;
  line-height: normal;
  background-image: url('../img/broadcast/arrow.svg');
  background-repeat: no-repeat;
  background-position: right;
  transition: color 0.3s ease-in-out, background-image 0.3s ease-in-out;
  &:hover {
    color: #6d31ee;
    background-image: url('../img/broadcast/arrow-violet.svg');
  }
  @media (max-width: 610px) {
    padding-right: 28px;
    font-size: 12px;
    color: #6d31ee;
    background-image: url('../img/broadcast/arrow-violet.svg');
  }
  &:focus-visible {
    color: #fff;
    outline: none;
    background-color: #aa9dfa;
    background-image: url('../img/broadcast/arrow-white.svg');
  }
  &:active {
    color: #4f28a5;
  }
`;

export function SectionBroadcast() {
  return (
    <section id='broadcast-sec' style={{ position: 'relative' }}>
      <ContainerBroadcast>
        <TitleH2Broadcast>Передачи</TitleH2Broadcast>
        <SectionFlexWrap>
          <Archive>
            <MicImg src='../img/broadcast/mic.png' />
            <ArchiveWrap>
              <ArchiveButton>Архив</ArchiveButton>
              <Paragraph>
                В архив попадают все передачи, которые вы пропустили! Enjoy:)
              </Paragraph>
            </ArchiveWrap>
          </Archive>
          <BroadcastsWrap>
            <List>
              {broadcasts.map(({ title, text, imgSrc, imgSrc2, href }) => (
                <ListItem key={title}>
                  <Card imgsrc={imgSrc} imgsrc2={imgSrc2}>
                    <CardBottom>
                      <TitleH3>{title}</TitleH3>
                      <Text>{text}</Text>
                      <Link href={href}>Подробнее</Link>
                    </CardBottom>
                  </Card>
                </ListItem>
              ))}
            </List>
          </BroadcastsWrap>
        </SectionFlexWrap>
      </ContainerBroadcast>
    </section>
  );
}
