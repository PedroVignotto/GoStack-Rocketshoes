import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: #141419;
`;

export const Logo = styled.Image`
  width: 184px;
  height: 24px;
`;

export const ButtonLogo = styled.TouchableOpacity``;

export const CartButton = styled.TouchableOpacity`
  width: 26px;
  height: 26px;
`;

export const CartCount = styled.Text`
  position: absolute;
  top: -4px;
  right: -6px;
  width: 18px;
  height: 18px;
  background: #7159c1;
  color: #fff;
  border-radius: 9px;
  text-align: center;
  align-items: center;
  font-size: 12px;
`;
