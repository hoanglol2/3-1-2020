import React from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import styles from './SearchBox.style';
// icons.
import {PAGES, SEARCH} from '../../assets/images';

const SearchBox = () => {
  return (
    <>
      <View style={styles.searchOuterContainer}>
        <View style={styles.wrapTitle}>
          <Text style={styles.title}>Messages</Text>
          <TouchableOpacity>
            <Image source={PAGES} style={styles.icon} />
          </TouchableOpacity>
        </View>
        <View style={styles.searchInnerContainer}>
          <Image source={SEARCH} style={styles.iconSearch} />
          <TextInput placeholder="Search" style={styles.input} />
        </View>
      </View>
    </>
  );
};

export default SearchBox;
