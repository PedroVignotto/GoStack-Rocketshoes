import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';
import {
  Container,
  CartEmpty,
  CartEmptyText,
  Products,
  Product,
  Info,
  Image,
  Description,
  Title,
  Price,
  ButtonDelete,
  Controls,
  Amount,
  ButtonDecrement,
  Input,
  ButtonIncrement,
  Subtotal,
  TotalContainer,
  TotalText,
  TotalPrice,
  Order,
  OrderText,
} from './styles';

function Cart({ cart, total, removeFromCart, updateAmountRequest, cartSize }) {
  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }

  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }

  return (
    <Container>
      {cartSize ? (
        <Products>
          {cart.map(product => (
            <Product key={product.id}>
              <Info>
                <Image source={{ uri: product.image }} />
                <Description>
                  <Title>{product.title}</Title>
                  <Price>{product.priceFormatted}</Price>
                </Description>
                <ButtonDelete onPress={() => removeFromCart(product.id)}>
                  <Icon name="delete-forever" size={26} color="#7159c1" />
                </ButtonDelete>
              </Info>
              <Controls>
                <Amount>
                  <ButtonDecrement
                    onPress={() => {
                      decrement(product);
                    }}
                  >
                    <Icon
                      name="remove-circle-outline"
                      size={22}
                      color="#7159c1"
                    />
                  </ButtonDecrement>
                  <Input value={String(product.amount)} />
                  <ButtonIncrement
                    onPress={() => {
                      increment(product);
                    }}
                  >
                    <Icon name="add-circle-outline" size={22} color="#7159c1" />
                  </ButtonIncrement>
                </Amount>
                <Subtotal>{product.subtotal}</Subtotal>
              </Controls>
            </Product>
          ))}
          <TotalContainer>
            <TotalText>TOTAL</TotalText>
            <TotalPrice>{total}</TotalPrice>
            <Order>
              <OrderText>FINALIZAR PEDIDO</OrderText>
            </Order>
          </TotalContainer>
        </Products>
      ) : (
        <CartEmpty>
          <Icon name="shopping-basket" color="#FFF" size={26} />
          <CartEmptyText>Carrinho vazio</CartEmptyText>
        </CartEmpty>
      )}
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
  cartSize: state.cart.length,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
