import React, { useMemo } from 'react';
import { Modal, Platform } from 'react-native';
import moment from 'moment';
import { MaterialIcons } from '@expo/vector-icons';

import {
  Container,
  SubContainer,
  Photo,
  ID,
  Name,
  Phone,
  Email,
  Label,
  Gender,
  Birthday,
  Nationality,
  Address,
  Center,
  Col,
  Bottom,
  Icon,
  Divider,
  PhotoContainer,
  Flex,
  CloseButton
} from './styles'

import { IProps } from './types';

const ModalComponent: React.FC<IProps> = ({ isOpen, callback, user }) => {

  const birthday = useMemo(() => moment(user?.dob.date).format('L'), [user?.dob])

  return (
    <Container>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isOpen}
        onRequestClose={() => callback()}>
        <SubContainer>
          <Bottom>
            <CloseButton onPress={() => callback()}>
              <MaterialIcons name="close" size={17} color="#fff" />
            </CloseButton>
            <PhotoContainer
              style={Platform.OS === 'ios' ? {
                shadowColor: '#15151625',
                shadowOffset: {
                  width: 5,
                  height: 5
                },
                shadowOpacity: 5,
              } : { elevation: 5 }}
            >
              <Photo
                source={{ uri: user?.picture.medium }}
              />
            </PhotoContainer>
            <Center>
              <ID>{user?.id.name} {user?.id.value}</ID>
              <Name>
                {user?.name.title} {user?.name.first} {user?.name.last}
              </Name>
              <Flex style={{ marginTop: 13, marginBottom: 5 }}>
                <MaterialIcons name="phone" size={18} color="#0083CA" />
                <Phone>{user?.phone}</Phone>
              </Flex>
              <Flex>
                <MaterialIcons name="mail" size={18} color="#0083CA" />
                <Email>{user?.email}</Email>
              </Flex>
            </Center>
            <Divider />
            <Col>
              <Col>
                <MaterialIcons name="person" size={18} color="#0083CA" />
                <Icon>
                  <Label>Gender</Label>
                  <Gender>{user?.gender}</Gender>
                </Icon>
              </Col>
              <Col>
                <MaterialIcons name="calendar-today" size={18} color="#0083CA" />
                <Icon>
                  <Label>Birthday</Label>
                  <Birthday>{birthday}</Birthday>
                </Icon>
              </Col>
            </Col>
            <Divider />
            <Col>
              <Col>
                <MaterialIcons name="location-pin" size={18} color="#0083CA" />
                <Icon>
                  <Label>Nationality</Label>
                  <Nationality>{user?.location.country}</Nationality>
                </Icon>
              </Col>
              <Col>
                <MaterialIcons name="location-city" size={18} color="#0083CA" />
                <Icon>
                  <Label>Address</Label>
                  <Address>
                    {user?.location.street.name}, {user?.location.street.number}
                  </Address>
                </Icon>
              </Col>
            </Col>
          </Bottom>
        </SubContainer>
      </Modal>
    </Container>
  );
};

export default ModalComponent;