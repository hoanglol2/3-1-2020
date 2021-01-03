import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import styles from './SearchScrollBar.style';
// components
import BoxChat from '../BoxChat';
// data.
import {users} from '../../mocks';

const SearchScrollBar = () => {
  return (
    <>
      <View style={styles.searchOuterContainer}>
        <Text style={styles.text}>Activities</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {users.map(({name, avatar}: any, index: any) => (
            <BoxChat key={index} text={name} source={avatar} />
          ))}
        </ScrollView>
      </View>
    </>
  );
};

export default SearchScrollBar;
