import {StyleSheet} from 'react-native';
import {poppinsR, poppinsB} from '../../assets/fonts';

export default StyleSheet.create({
  searchOuterContainer: {
    marginTop: 20,
  },
  icon: {
    width: 30,
    height: 30,
  },
  title: {
    ...poppinsR,
    fontWeight: '600',
    fontSize: 23,
    marginLeft: 25,
    color: '#333',
  },
  wrapTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  input: {
    backgroundColor: '#ebebec',
    borderRadius: 25,
    ...poppinsR,
    fontSize: 16,
    paddingLeft: 60,
    paddingRight: 20,
    paddingVertical: 15,
    color: '#000',
    fontWeight: '500',
  },
  searchInnerContainer: {
    width: '90%',
    alignSelf: 'center',
    position: 'relative',
    marginVertical: 20,
  },
  iconSearch: {
    position: 'absolute',
    width: 25,
    height: 25,
    top: 15,
    left: 20,
    zIndex: 1,
  },
});
