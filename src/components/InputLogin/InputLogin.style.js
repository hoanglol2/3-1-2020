import {StyleSheet} from 'react-native';
import {poppinsR, poppinsB} from '../../assets/fonts';

export default StyleSheet.create({
  InputOuterContainer: {
    paddingHorizontal: 30,
  },
  input: {
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderColor: '#f4f4f4',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    ...poppinsR,
  },
  inputSecond: {
    marginTop: 20,
    marginBottom: 5,
  },
  text: {
    marginTop: 10,
    marginBottom: 20,
    alignSelf: 'flex-end',
    fontSize: 13,
    color: '#333',
    ...poppinsR,
  },
  button: {
    backgroundColor: '#ffa500',
    color: '#fff',
    alignItems: 'center',
    textAlign: 'center',
    paddingVertical: 10,
    borderRadius: 5,
    fontSize: 16,
    ...poppinsR,
  },
  wrapText: {
    marginTop: 30,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  textSmall: {
    fontSize: 13,
    color: '#333',
    ...poppinsR,
  },
  textPrimary: {
    color: '#ffa500',
    fontWeight: '700',
  },
});
