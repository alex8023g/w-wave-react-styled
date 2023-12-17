import React from 'react';
import styles from './header.css';
import styled from 'styled-components';
import { SearchIcon } from '../SearchIcon';

const menu = [
  { href: '#podcasts', name: 'Подкасты' },
  { href: '#broadcast-sec', name: 'Передачи' },
  { href: '#guests', name: 'Гости' },
  { href: '#playlist-sec', name: 'Плейлисты' },
  { href: '#about', name: 'О нас' },
];

const StyledHeader = styled.header`
  position: relative;
  display: flex;
  align-items: start;
  margin: 0 auto;
  padding: 34px 0 34px 15px;
  max-width: 1140px;
  @media (max-width: 1139px) {
    flex-direction: column;
    padding: 1px 0 0px 0px;
  }
`;

const Nav = styled.nav`
  @media (max-width: 1139px) {
    align-self: stretch;
    border-top: 1px solid #e6e8ec;
    border-bottom: 1px solid #e6e8ec;
    overflow-x: scroll;
  }
`;

const List = styled.ul`
  display: flex;
  color: #121723;
  font-family: 'Muller-Reg', 'sans-serif';
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (max-width: 1139px) {
    display: flex;
    justify-content: space-between;
    padding: 21px 100px;
  }
  @media (max-width: 1023px) {
    padding: 21px 115px;
    font-size: 16px;
    overflow-x: scroll;
  }
  @media (max-width: 767px) {
    padding: 16px 32px 15px 32px;
  }
`;

const ListItem = styled.li`
  &:not(:last-child) {
    margin-right: 59px;
  }
`;

const LinkNav = styled.a`
  white-space: nowrap;
  &:hover {
    color: #6d31ee;
  }
  &:focus-visible {
    color: #fff;
    outline: none;
    background-color: #aa9dfa;
  }
  &:active,
  .broadcasts-card__a:active {
    color: #4f28a5;
  }
`;

const LinkLogo = styled.a`
  margin-right: 80px;
`;

const SearchBtn = styled.button`
  position: absolute;
  top: 32px;
  right: 15px;
  background-color: transparent;
  @media (max-width: 1139px) {
    top: 27px;
    right: 95px;
  }
  @media (max-width: 1023px) {
    top: 28px;
    right: 110px;
  }
  @media (max-width: 767px) {
    top: 15px;
    right: 26px;
  }
`;

const LogoImg = styled.img`
  margin-right: 80px;
  @media (max-width: 1139px) {
    margin-right: 0;
    padding: 30px 0 25px 90px;
  }
  @media (max-width: 1023px) {
    padding: 30px 0 25px 107px;
  }
  @media (max-width: 767px) {
    padding: 20px 0 15px 18px;
    width: 140px;
  }
`;

export function Header() {
  return (
    <StyledHeader>
      <LinkLogo href='#'>
        <LogoImg src='img/logo.svg' alt='' />
      </LinkLogo>
      <Nav>
        <List>
          {menu.map((mi) => (
            <ListItem key={mi.name}>
              <LinkNav href={mi.href}>{mi.name}</LinkNav>
            </ListItem>
          ))}
        </List>
      </Nav>
      <SearchBtn>
        <SearchIcon />
      </SearchBtn>
    </StyledHeader>
  );
}
