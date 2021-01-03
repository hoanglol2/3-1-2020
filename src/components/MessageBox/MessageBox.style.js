import {StyleSheet} from 'react-native';
import {poppinsR, poppinsB} from '../../assets/fonts';

export default StyleSheet.create({
  image: {
    width: 80,
    height: 80,
  },
  messageOuterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    ...poppinsR,
    fontWeight: '600',
    fontSize: 16,
  },
  wrapMessage: {
    marginLeft: 20,
  },
  text: {
    ...poppinsR,
    fontSize: 12,
    color: '#333',
  },
});
