import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import styles from './HomeScreen.style';
// components.
import SearchBox from '../../components/SearchBox';
import SearchScrollBar from '../../components/SearchScrollBar';
import MessageBox from '../../components/MessageBox';
import MessageBoxTitle from '../../components/MessageBoxTitle';
// data
import {users} from '../../mocks';

interface Props {
  navigation: any;
  route: any;
}

const HomeScreen = (props: Props) => {
  const {navigation, route} = props;
  const [id, getId] = useState('');

  useEffect(() => {
    const {id} = route.params;
    getId(id);
  }, [route.params]);

  const _renderItem = ({item}: any) => {
    let room = id + item._id;
    let friendId = item._id;
    return (
      <MessageBox
        source={item.avatar}
        name={item.name}
        onPress={() =>
          navigation.navigate('Chat', {
            yourId: id,
            friendId: friendId,
            room: room,
          })
        }
      />
    );
  };

  return (
    <>
      <View style={styles.homeOuterContainer}>
        <SearchBox />
        <SearchScrollBar />
        <MessageBoxTitle />
        <FlatList
          showsVerticalScrollIndicator={false}
          style={styles.homeInnerContainer}
          data={users}
          keyExtractor={({_id}) => _id.toString()}
          renderItem={_renderItem}
        />
      </View>
    </>
  );
};

export default HomeScreen;
