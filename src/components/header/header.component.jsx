import React from 'react';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionsDiv, OptionsLink} from './header.styles';
const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <Logo className='logo-container' to='/' />
      <LogoContainer className='logo' />
    <OptionsContainer className='options'>
      <OptionsLink to='/shop'>
        SHOP
      </OptionsLink>
      <OptionsLink to='/about'>
        ABOUT
      </OptionsLink>
      {currentUser ? (
        <OptionsDiv onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionsDiv>
      ) : (
        <OptionsLink to='/signin'>
          SIGN IN
        </OptionsLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
