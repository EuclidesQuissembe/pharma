import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { IUser } from '../../@types/data';

import CardItem from '../../components/CardItem';
import Modal from '../../components/Modal';
import ModalFilter from '../../components/ModalFilter';

import {
  Container,
  Separator,
  Header,
  Search,
  ContainerSearch,
  FilterButton
} from './styles';

import api from '../../services/api';

const Home: React.FC = () => {

  const [showModal, setShowModal] = useState<boolean>(false)
  const [showModalFilter, setShowModalFilter] = useState<boolean>(false)
  const [users, setUsers] = useState<IUser[]>([])
  const [inputFilter, setInputFilter] = useState<string>('')
  const [user, setUser] = useState<IUser | null>(null)
  const [activeFilter, setActiveFilter] = useState<string>('all')
  const [isFetching, setIsFetching] = useState<boolean>(false)
  const [page, setPage] = useState<number>(1)

  const getUsers = async (page: number) => {
    if (inputFilter !== "") return

    setIsFetching(true)

    try {
      const response = await api.get('', { params: { results: 50, page } })

      const { results } = response.data

      if (response.status === 200) {
        if (users.length === 0) {
          setUsers(results)
          return;
        }
        setUsers([...users, ...results])
      }

    } catch (err) {
      console.log(err)
    } finally {
      setIsFetching(false)
    }
  }

  const handlePresentModalPress = useCallback((user: IUser) => {
    setUser(user)
    setShowModal(true)
  }, []);

  useEffect(() => {
    getUsers(page)
  }, [])

  const onHandleFilter = useMemo(() => (users: IUser[]) => {
    let data: IUser[]

    if (inputFilter !== "") {
      data = users.filter((user) =>
        user.name.first.toLowerCase().includes(inputFilter.toLowerCase()) ||
        user.name.last.toLowerCase().includes(inputFilter.toLowerCase()) ||
        user.location.country.toLowerCase().includes(inputFilter.toLowerCase())
      );
    } else {
      data = users;
    }

    if (activeFilter !== 'all') {
      data = data.filter(user => user.gender === activeFilter)
    }

    return data
  }, [inputFilter, activeFilter]);

  const data = useMemo(() => onHandleFilter(users), [users, onHandleFilter]);

  const toggleModal = () => setShowModal(!showModal)

  const toggleModalFilter = (filter: string | null) => {
    setShowModalFilter(!showModalFilter)

    if (filter) {
      setActiveFilter(filter)
    }
  }

  const keyExtractor = useCallback(item => item.email, [])

  const renderItem = ({ item }: { item: IUser }) => (
    <CardItem user={item} showModal={user => handlePresentModalPress(user)} />
  )

  const loadMore = () => {
    const currentPage = page + 1
    getUsers(currentPage)
    setPage(currentPage)
  }

  return (
    <Container>
      <FlatList
        keyExtractor={keyExtractor}
        data={data}
        renderItem={renderItem}
        initialNumToRender={15}
        ItemSeparatorComponent={Separator}
        contentContainerStyle={{ padding: 10 }}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListHeaderComponent={<Header>
          <ContainerSearch>
            <Search
              placeholder='Pesquisar...'
              onChangeText={value => setInputFilter(value)}
            />
            <MaterialIcons name="search" size={18} color="#666666" />
          </ContainerSearch>
          <FilterButton onPress={() => setShowModalFilter(true)}>
            <MaterialIcons name="filter-alt" size={35} color="#00AFAD" />
          </FilterButton>
        </Header>
        }
        ListFooterComponent={
          <>
            {isFetching ? (
              <ActivityIndicator />
            ) : <></>}
          </>
        }
      />

      {showModal && (
        <Modal
          isOpen={showModal}
          callback={toggleModal}
          user={user}
        />
      )}

      {showModalFilter && (
        <ModalFilter
          isOpen={showModalFilter}
          callback={filter => toggleModalFilter(filter)}
          active={activeFilter}
        />
      )}
    </Container>
  )
}

export default Home;