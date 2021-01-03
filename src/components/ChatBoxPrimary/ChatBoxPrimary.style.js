import {StyleSheet} from 'react-native';
import {poppinsR, poppinsB} from '../../assets/fonts';

export default StyleSheet.create({
  outerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 25,
    marginTop: 20,
    marginBottom: 20,
  },
  innerContainer: {
    backgroundColor: '#7299e4',
    width: '80%',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 25,
  },
  timeLine: {
    ...poppinsR,
    color: 'gray',
    fontSize: 12,
    marginRight: 15,
  },
  text: {
    ...poppinsR,
    color: '#e3ebfa',
    lineHeight: 23,
    fontWeight: '600',
  },
});
