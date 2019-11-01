import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { formatPrice } from '../../util/format';
import api from '../../services/api';
import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  Loading,
  ProductList,
  Product,
  Image,
  Title,
  Price,
  AddButton,
  ProductAmountText,
  ProductAmount,
  AddButtonText,
} from './styles';

class Home extends Component {
  state = {
    products: [],
    loading: true,
  };

  async componentDidMount() {
    const response = await api.get('/products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data, loading: false });
  }

  handleAddProduct = id => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  };

  render() {
    const { products, loading } = this.state;
    const { amount } = this.props;

    return (
      <Container>
        {loading ? (
          <Loading />
        ) : (
          <ProductList
            horizontal
            data={products}
            keyExtractor={product => String(product.id)}
            renderItem={({ item }) => (
              <Product>
                <Image source={{ uri: item.image }} />
                <Title>{item.title}</Title>
                <Price>{item.priceFormatted}</Price>
                <AddButton onPress={() => this.handleAddProduct(item.id)}>
                  <ProductAmount>
                    <Icon name="add-shopping-cart" color="#fff" size={20} />
                    <ProductAmountText>
                      {amount[item.id] || 0}
                    </ProductAmountText>
                  </ProductAmount>
                  <AddButtonText>ADICIONAR</AddButtonText>
                </AddButton>
              </Product>
            )}
          />
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, item) => {
    amount[item.id] = item.amount;

    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
