import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';

import { Container, Logo, CartButton, CartCount, ButtonLogo } from './styles';

import logo from '../../assets/logo.png';

function Header({ navigation, cartSize }) {
  return (
    <Container>
      <ButtonLogo onPress={() => navigation.navigate('Home')}>
        <Logo source={logo} resizeMode="cover" />
      </ButtonLogo>
      <CartButton onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" color="#FFF" size={26} />
        <CartCount>{cartSize}</CartCount>
      </CartButton>
    </Container>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
