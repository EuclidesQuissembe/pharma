import styled from 'styled-components/native';

import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const SubContainer = styled(TouchableOpacity).attrs({
  activeOpacity: 1
})`
  flex: 1;
  justify-content: center;
  padding: 30px;
  background-color: rgba(0, 0, 0, .7);
`;

export const Card = styled.View`
  border-radius: 5px;
  padding: 15px 0 0;
  background-color: ${props => props.theme.colors.white};
`;

export const Padding = styled.View`
  padding: 0 30px;
`;

export const Title = styled.Text`
  font-size: 16px;
  margin-left: 20px;
  font-family: 'Roboto-Regular';
  `;

export const Divider = styled.View`
  border-bottom-width: 1px;
  margin: 15px 0;
  border-bottom-color: #DFDFDF;
`;

export const FilterButton = styled(TouchableOpacity).attrs({
  activeOpacity: 0.7
})`
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
`;

export const ButtonText = styled.Text`
  font-size: 17px;
  margin-left: 15px;
  font-family: 'Roboto-Regular';
`;