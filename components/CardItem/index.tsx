import React, { useMemo } from 'react';
import moment from 'moment';

import {
  Container,
  Photo,
  Name,
  Phone,
  Gender,
  Registered,
  Col,
  View
} from './styles';
import { IProps } from './types';

const CardItem: React.FC<IProps> = ({ showModal, user }) => {
  const { picture, name, phone, gender, registered } = user

  const registerFormatted = useMemo(() => moment(registered.date).format('L'), [registered])

  return (
    <Container onPress={() => showModal(user)}>
      <Photo source={{ uri: picture.thumbnail }} />
      <View>
        <Name>{name.title} {name.first} {name.last}</Name>
        <Phone>{phone}</Phone>
        <Col>
          <Gender>{gender}</Gender>
          <Registered>{registerFormatted}</Registered>
        </Col>
      </View>
    </Container>
  )
}

export default CardItem;