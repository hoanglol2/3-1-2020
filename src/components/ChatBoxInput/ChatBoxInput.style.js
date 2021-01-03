import {StyleSheet} from 'react-native';
import {poppinsR, poppinsB} from '../../assets/fonts';

export default StyleSheet.create({
  outerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
  },
  icon: {
    width: 25,
    height: 25,
  },
  wrapIcon: {
    position: 'absolute',
    top: 15,
    right: 25,
  },
  input: {
    ...poppinsR,
    fontSize: 16,
    width: '100%',
    paddingHorizontal: 25,
    paddingVertical: 15,
    paddingRight: 75,
    backgroundColor: '#f9f9f9',
  },
  text: {
    ...poppinsR,
    color: '#48749d',
    fontSize: 18,
    fontWeight: '700',
  },
});
