import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.ScrollView`
  flex: 1;
  background: #191920;
  padding: 10px;
`;

export const CartEmpty = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CartEmptyText = styled.Text`
  color: #fff;
  font-size: 26px;
  font-weight: bold;
  text-align: center;
  margin-left: 10px;
`;

export const Products = styled.View`
  background: #fff;
`;

export const Product = styled.View`
  padding: 15px;
`;

export const Info = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Image = styled.Image`
  width: 80px;
  height: 80px;
`;

export const Description = styled.View`
  flex: 1;
  margin-left: 20px;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: #333;
  margin-top: auto;
`;

export const Price = styled.Text`
  font-weight: bold;
  font-size: 16px;
  margin-top: auto;
`;

export const ButtonDelete = styled.TouchableOpacity``;

export const Controls = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  background: #eee;
  padding: 5px 10px;
`;

export const Amount = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonDecrement = styled.TouchableOpacity``;
export const ButtonIncrement = styled.TouchableOpacity``;

export const Input = styled.TextInput.attrs({
  editable: false,
})`
  background: #fff;
  color: #333;
  padding: 5px;
  margin: 0 5px;
  border: 1px solid #ddd;
  border-radius: 5px;
  min-width: 52px;
  height: 30px;
  text-align: center;
`;
export const Subtotal = styled.Text`
  font-weight: bold;
  font-size: 18px;
`;

export const TotalContainer = styled.View`
  margin-top: 20px;
  align-items: center;
  justify-content: center;
`;
export const TotalText = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #999;
`;
export const TotalPrice = styled.Text`
  font-weight: bold;
  font-size: 30px;
  margin-bottom: 10px;
`;
export const Order = styled(RectButton)`
  width: 315px;
  margin: 15px;
  padding: 12px;
  background: #7159c1;
  border-radius: 5px;
`;
export const OrderText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
`;
