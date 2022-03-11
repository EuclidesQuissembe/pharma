import styled from 'styled-components/native';

import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const SubContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, .6);
`;

export const Center = styled.View`
  align-items: center;
  margin-bottom: 10px;
`;

export const Col = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
`;

export const Bottom = styled.View`
  position: relative;
  padding: 0 20px 60px;
  background-color: ${props => props.theme.colors.white};
`;

export const Icon = styled.View`
  margin-left: 10px;
`;

export const Flex = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Divider = styled.View`
  margin: 10px 0;
  border-bottom-width: 1px;
  border-bottom-color: #DFDFDF;
`;

export const Photo = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 50px;
`;

export const PhotoContainer = styled.View`
  width: 80px;
  height: 80px;
  margin: -40px auto 0;
  border-radius: 50px;
  background-color: ${props => props.theme.colors.white};
`;

export const ID = styled.Text`
  margin: 12px 0;
  font-family: 'Roboto-Regular';
  font-size: 12px;
`;

export const Name = styled.Text`
  font-family: 'Roboto-Bold';
  font-size: 18px;
  color: ${props => props.theme.colors.primary};
`;

export const Phone = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 14px;
  margin-left: 10px;
`;

export const Email = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 14px;
  margin-left: 10px;
`;

export const Label = styled.Text`
  font-size: 12px;
  font-family: 'Roboto-Regular';
`;

export const SubTitle = styled.Text`
  font-size: 14px;
  font-family: 'Roboto-Medium';
`;

export const Gender = styled(SubTitle)`
  
`;

export const Birthday = styled(SubTitle)`
  
`;

export const Nationality = styled(SubTitle)`
  
`;

export const Address = styled(SubTitle)`
  flex-wrap: wrap;
`;

export const CloseButton = styled(TouchableOpacity).attrs({
  activeOpacity: 0.7
})`
  margin-top: 10px;
  position: absolute;
  right: 10px;
  width: 25px;
  height: 25px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.orange};
`;