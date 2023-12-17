import React from 'react';
import styled from 'styled-components';
import { Container } from './Container';
import { TitleH2 } from './TitleH2';

const Section = styled.section`
  color: #a1a6b4;
  background-color: #121723;
`;

const ContainerGuest = styled(Container)`
  padding-bottom: 90px;
  @media (max-width: 1023px) {
    padding-bottom: 89px;
  }
  @media (max-width: 767px) {
    padding-bottom: 47px;
  }
`;

const TitleH2Guest = styled(TitleH2)`
  color: #fff;
  margin-bottom: 12px;
`;

const H3WeHave = styled.h3`
  margin-bottom: 9px;
  color: #a1a6b4;
  font-family: 'Muller-Bold', 'sans-serif';
  font-size: 20px;
  line-height: 150%;
  @media (max-width: 767px) {
    font-size: 14px;
    margin-bottom: 0px;
  }
`;

const PWeHave = styled.p`
  margin-bottom: 50px;
  max-width: 825px;
  font-family: 'Muller-Reg', 'sans-serif';
  font-size: 20px;
  line-height: 160%;
  @media (max-width: 1139px) {
    max-width: 550px;
  }
  @media (max-width: 767px) {
    font-size: 14px;
    line-height: 155%;
    margin-bottom: 30px;
  }
`;

const Card = styled.li`
  display: flex;
  @media (max-width: 1023px) {
    flex-direction: column;
  }
  &:not(:last-child) {
    margin-bottom: 45px;
  }
`;

const guests = [
  {
    name: 'Ольга Мартынова',
    text: 'Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт&#8209;критик газеты «Коммерсантъ». Ведёт активную блогерскую деятельность как куратор музея «Гараж», коим является с 2016 года.',
    srcset1: 'img/guests/guest-1-432.png',
    srcset2: 'img/guests/guest-1-540.png',
  },
  {
    name: 'Денис Гришин',
    text: 'Однозначно, элементы политического процесса являются только методом политического участия и смешаны с не уникальными данными до степени совершённой неузнаваемости, из-за чего возрастает их статус бесполезности.',
    srcset1: 'img/guests/guest-2-432.png',
    srcset2: 'img/guests/guest-2-540.png',
  },
  {
    name: 'Ольга Мартынова',
    text: ' С другой стороны, высококачественный прототип будущего проекта выявляет срочную потребность дальнейших направлений развития. В рамках спецификации современных стандартов, реплицированные с зарубежных источников.',
    srcset1: 'img/guests/guest-3-432.png',
    srcset2: 'img/guests/guest-3-540.png',
  },
];

const Picture = styled.picture`
  margin-right: 30px;
  min-width: 432px;
  @media (max-width: 1023px) {
    margin-right: 0;
    margin-bottom: 25px;
    min-width: 540px;
  }
  @media (max-width: 767px) {
    margin-bottom: 25px;
    min-width: auto;
    margin-bottom: 6px;
  }
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const Name = styled.h3`
  margin-bottom: 9px;
  color: #fff;
  font-family: 'Muller-Medium', 'sans-serif';
  font-size: 20px;
  line-height: normal;
`;

const Text = styled.p`
  max-width: 490px;
  color: #a1a6b4;
  font-family: 'Muller-Reg', 'sans-serif';
  font-size: 16px;
  line-height: 180%;
  @media (max-width: 1023px) {
    max-width: 360px;
    margin-bottom: 30px;
  }
`;

const Button = styled.button`
  margin-top: auto;
  margin-bottom: 5px;
  padding: 10px 18px;
  border-radius: 77px;
  border: 2px solid #aa9dfa;
  color: #aa9dfa;
  text-align: center;
  font-family: 'Muller-Medium', 'sans-serif';
  font-size: 16px;
  line-height: normal;
  background-color: transparent;
  &:hover {
  color: #fff;
  background-color: #aa9dfa;
  @media (max-width: 767px) {
     padding: 8px 13px;
  }
  &:focus-visible {
  color: #fff;
  outline: none;
  border: none;
  background-color: #6d31ee;
}
&:active {
  color: #fff;
  /* outline: 1px solid #6d31ee; */
  border: 2px solid #6d31ee;
  background-color: #6d31ee;
}

`;
export function SectionGuest() {
  return (
    <Section>
      <ContainerGuest>
        <TitleH2Guest>Гости</TitleH2Guest>
        <H3WeHave>У нас бывают:</H3WeHave>
        <PWeHave>
          Блогеры, арт-критики и деятели искусства, музыканты, молодые учёные и люди
          науки, историки, филологи и много других интересных гостей!
        </PWeHave>
        <ul>
          {guests.map(({ name, text, srcset1, srcset2 }) => (
            <Card>
              <Picture>
                <source srcSet={srcset1} media='(min-width: 1024px)' />
                <source srcSet={srcset2} media='(min-width: 500px)' />
                <img src={srcset1} alt='' />
              </Picture>
              <TextWrap>
                <Name>{name}</Name>
                <Text>{text}</Text>
                <Button>Эфиры с гостем</Button>
              </TextWrap>
            </Card>
          ))}
        </ul>
      </ContainerGuest>
    </Section>
  );
}
