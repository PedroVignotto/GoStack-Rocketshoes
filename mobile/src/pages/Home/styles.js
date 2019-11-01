import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { darken } from 'polished';

export const Container = styled.View`
  flex: 1;
  background: #191920;
`;

export const Loading = styled.ActivityIndicator.attrs({
  color: '#7159c1',
  size: 50,
})`
  flex: 1;
`;

export const ProductList = styled.FlatList``;

export const Product = styled.View`
  width: 220px;
  height: 358px;
  background: #fff;
  padding: 10px;
  margin: 20px;
  border-radius: 5px;
`;
export const Image = styled.Image`
  width: 200px;
  height: 200px;
`;
export const Title = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 16px;
  color: #333;
  margin-top: auto;
`;
export const Price = styled.Text`
  font-size: 21px;
  font-weight: bold;
  color: #000;
  margin-top: auto;
`;
export const AddButton = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  margin-top: auto;
  background: #7159c1;
`;
export const ProductAmount = styled.View`
  padding: 12px;
  background: ${darken(0.04, '#7159c1')};
  flex-direction: row;
  align-items: center;
`;
export const ProductAmountText = styled.Text`
  color: #fff;
  margin-left: 4px;
`;
export const AddButtonText = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: bold;
  color: #fff;
`;
