import {StyleSheet} from 'react-native';
import {poppinsR, poppinsB} from '../../assets/fonts';

export default StyleSheet.create({
  boxChatOuterContainer: {
    alignItems: 'center',
    marginRight: 25,
  },
  image: {
    width: 65,
    height: 65,
  },
  text: {
    ...poppinsR,
    fontSize: 14,
    marginTop: 10,
    fontWeight: '600',
  },
});
