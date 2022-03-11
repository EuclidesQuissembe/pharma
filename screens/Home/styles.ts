import styled from 'styled-components/native';

import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.gray};
`;

export const Separator = styled.View`
  margin-bottom: 10px;
`;

export const Header = styled.View`
  margin-bottom: 20px;
  flex-direction: row;
`;

export const ContainerSearch = styled.View`
  flex: 1;
  padding: 12px;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 4px;
  background-color: ${props => props.theme.colors.white};  
`;

export const Search = styled.TextInput`
  flex: 1;
  margin-right: 10px;
`;

export const FilterButton = styled(TouchableOpacity).attrs({
  activeOpacity: 0.7
})`
  margin-left: 10px;
  width: 50px;
  justify-content: center;
  align-items: center;
`;