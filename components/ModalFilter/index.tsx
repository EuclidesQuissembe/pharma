import React from 'react';
import { Modal } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import {
  Container,
  SubContainer,
  Card,
  Title,
  Divider,
  FilterButton,
  ButtonText,
  Padding
} from './styles'

import { IProps } from './types';

const ModalComponent: React.FC<IProps> = ({ isOpen, callback, active }) => {

  const filters = [
    { label: 'All', value: 'all' },
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
  ]

  return (
    <Container>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isOpen}
        onRequestClose={() => callback(null)}>
        <SubContainer onPress={() => callback(null)}>
          <Card>
            <Title>Filters</Title>
            <Divider />
            <Padding>
              {filters.map(filter => (
                <FilterButton key={filter.value} onPress={() => callback(filter.value)}>
                  {filter.value === active ? (
                    <MaterialIcons name="check-circle" size={24} color="#00AFAD" />
                  ) : (
                    <MaterialIcons name="radio-button-unchecked" size={24} color="#00AFAD" />
                  )}
                  <ButtonText>{filter.label}</ButtonText>
                </FilterButton>
              ))}
            </Padding>
          </Card>
        </SubContainer>
      </Modal>
    </Container>
  );
};

export default ModalComponent;