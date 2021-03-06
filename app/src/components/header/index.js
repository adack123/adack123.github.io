import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import styled from 'styled-components';
import { Desktop, Tablet, Mobile } from '../responsive';
import BurgerMenu from '../burger';
import style from './style.css';

const Name = styled.h2`
  margin: 0;
  text-transform: uppercase;
  font-size: 1.15em;
  float: left;
  line-height: 70px;
  padding: 0 15px;
  font-family: ColfaxLight;
`;

export default class Header extends Component {
  renderNav = () => (
    <nav className="nav-effect">
      <Link activeClassName={style.active} href="/">
        Writings
      </Link>
      <Link activeClassName={style.active} href="/about">
        About &amp; Contact
      </Link>
    </nav>
  );

  renderMobileNav = () => (
    <BurgerMenu>
      <Link href="/"> Portfolio </Link>
      <Link href="/writings"> Writings </Link>
      <Link href="/about"> About & Contact </Link>
    </BurgerMenu>
  );

  render() {
    return (
      <header className={style.header}>
        <Name>Aaron Dack</Name>
        <Tablet>{this.renderNav()}</Tablet>
        <Desktop>{this.renderNav()}</Desktop>
        <Mobile>{this.renderMobileNav()}</Mobile>
      </header>
    );
  }
}
