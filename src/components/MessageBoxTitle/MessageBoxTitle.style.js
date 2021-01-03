import {StyleSheet} from 'react-native';
import {poppinsR, poppinsB} from '../../assets/fonts';

export default StyleSheet.create({
  messageOuterContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    ...poppinsR,
    fontSize: 18,
    color: '#333',
    fontWeight: '600',
  },
});
