import {StyleSheet} from 'react-native';
import {poppinsR, poppinsB} from '../../assets/fonts';

export default StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  },
  title: {
    fontSize: 26,
    marginTop: 10,
    marginLeft: 30,
    ...poppinsB,
  },
  text: {
    marginLeft: 30,
    fontSize: 16,
    color: '#333',
    ...poppinsR,
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginVertical: 35,
  },
});
