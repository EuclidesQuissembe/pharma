import styled from 'styled-components/native';

import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity).attrs({
  activeOpacity: 0.8
})`
  height: 85px;
  flex-direction: row;
  padding: 12px;
  border-radius: 5px;
  background-color: ${props => props.theme.colors.white};
`;

export const View = styled.View`
  flex: 1;
  padding-left: 15px;
`;

export const Photo = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 50px;
  `;

export const Name = styled.Text`
  font-size: 17px;
  font-family: 'Roboto-Bold';
  color: ${props => props.theme.colors.primary};
`;

export const Phone = styled.Text`
  margin: 5px 0;
  font-size: 13px;
  font-family: 'Roboto-Regular';
`;

export const Gender = styled.Text` 
  font-size: 12px;
  font-family: 'Roboto-Regular';
`;

export const Registered = styled.Text`
  font-size: 12px;
  font-family: 'Roboto-Regular';
`;

export const Col = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;