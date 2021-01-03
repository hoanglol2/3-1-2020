import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from './InputLogin.style';

interface Props {
  phoneValue: any;
  passwValue: any;
  onPress: any;
  phoneChangeText: any;
  PasswChangeText: any;
}

const InputLogin = (props: Props) => {
  const {
    passwValue,
    phoneValue,
    onPress,
    phoneChangeText,
    PasswChangeText,
  } = props;

  return (
    <>
      <View style={styles.InputOuterContainer}>
        <TextInput
          onChangeText={phoneChangeText}
          value={phoneValue}
          placeholder="Phone..."
          keyboardType="numeric"
          style={styles.input}
        />
        <TextInput
          onChangeText={PasswChangeText}
          value={passwValue}
          placeholder="Password..."
          keyboardType="visible-password"
          style={[styles.input, styles.inputSecond]}
        />
        <Text style={styles.text}>Forgot Password?</Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.button}>Login</Text>
        </TouchableOpacity>
        <View style={styles.wrapText}>
          <Text style={styles.textSmall}>Don't hava an account?</Text>
          <TouchableOpacity>
            <Text style={[styles.textSmall, styles.textPrimary]}> Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

// const phone = useFormLogin('', 'Phone...', 'numeric');
// const password = useFormLogin('', 'Password...', 'visible-password');
{
  /* <TextInput {...phone} style={styles.input} />
<TextInput {...password} style={[styles.input, styles.inputSecond]} /> */
}
// const useFormLogin = (initialValue, placeholder, keyboardType) => {
//   const [value, setValue] = useState(initialValue);

//   const _onChangeText = (text) => {
//     setValue(text);
//   };

//   return {
//     placeholder: placeholder,
//     keyboardType: keyboardType,
//     value: value,
//     onChangeText: _onChangeText,
//   };
// };

export default InputLogin;
