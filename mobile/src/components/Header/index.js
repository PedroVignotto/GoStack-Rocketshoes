import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';

import { Container, Logo, CartButton, CartCount, ButtonLogo } from './styles';

import logo from '../../assets/logo.png';

export default function Header({ navigation }) {
  const cartSize = useSelector(state => state.cart.length);

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
