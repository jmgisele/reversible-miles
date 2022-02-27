import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import cx from 'classnames';

import logo from '../public/assets/reversible_logo.svg';

import styles from './styles/navbar.module.scss';

//***** Navbar Links  *****/
const NavItem = ({ href, linkText, secondClass }: { href: string; linkText: string; secondClass?: string }) => {
  return secondClass ? (
    <Link href={href}>
      <a className={cx(styles.navLink, styles.secondClass)}>{linkText}</a>
    </Link>
  ) : (
    <Link href={href}>
      <a className={styles.navLink}>{linkText}</a>
    </Link>
  );
};

const DropDownItem = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggler = () => {
    setIsOpen(!isOpen);
    console.log('toggling');
  };
  return (
    <div onTouchStart={toggler} onTouchEnd={toggler} onMouseEnter={toggler} onMouseLeave={toggler}>
      <button className={styles.navLink}>
        Shop
        <KeyboardArrowDownIcon />
      </button>
      {isOpen && (
        <div className={styles.dropdownContainer}>
          <NavItem href="/shop/all" linkText="All" secondClass='dropDown' />
          <NavItem href="/shop/tapestries" linkText="Tapestries" secondClass='dropDown' />
          <NavItem href="/shop/prints" linkText="Prints" secondClass='dropDown' />
          <NavItem href="/shop/misc" linkText="Misc" secondClass='dropDown' />
        </div>
      )}
    </div>
  );
};
const NavItems = () => {
  return (
    <div className={styles.navLinksContainer}>
      <DropDownItem />
      <NavItem href="/commissions" linkText="Commissions" />
      <NavItem href="/about" linkText="About" />
      <NavItem href="/contact" linkText="Contact" />
    </div>
  );
};

//***** Navbars  *****/
export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainerDesktop}>
        <Image src={logo} layout="fixed" height="100px" alt="" />
      </div>
      <NavItems />
    </nav>
  );
};
