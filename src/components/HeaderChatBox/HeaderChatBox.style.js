import {StyleSheet} from 'react-native';
import {poppinsR, poppinsB} from '../../assets/fonts';

export default StyleSheet.create({
  headerChatOuterContainer: {
    marginVertical: 25,
    marginHorizontal: 20,
  },
  icon: {
    width: 20,
    height: 20,
  },
  image: {
    width: 50,
    height: 50,
  },
  title: {
    ...poppinsR,
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 15,
  },
  wrapImage: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
