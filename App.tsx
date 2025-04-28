import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { IbanInputColors } from './constants/colors';
import { useState } from 'react';

export default function App() {
  const [iban,setIban] = useState('');
  const [error,setError] = useState('')
  const [errorVisible, setErrorVisible] = useState(false)


  const handleChange = (text:string) => {
    setErrorVisible(false)
    const value = text.trim();
    let validValue = 'TR'
    let formattedValue = ''

    if(value.length<29){
      setError('The length of IBAN could be 26')
      setErrorVisible(true)
    }
    
    for (let i = 0; i < value.length; i++) {
      const char = value[i];
      if (char.match(/[0-9]/i)) {
        validValue += char;  
      }
    }
    for (let i = 0; i < validValue.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formattedValue += ' ';  
      }
      formattedValue += validValue[i];  
    }
    formattedValue = formattedValue.trim()
    setIban(formattedValue);
  
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
      <TextInput
          editable
          numberOfLines={1}
          onChangeText={text => handleChange(text)}
          style={styles.textInput}
          placeholder='TR __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __'
          maxLength={29}
          value={iban}
          keyboardType="numeric"
        />
        {errorVisible && <Text style={styles.errorText}>{error}</Text>}
        </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: IbanInputColors.container.background,
    marginTop:40,
    justifyContent:'center',
  },
  inputContainer:{
   padding:10,
   margin:5,
   gap:2
  },
  textInput:{
    borderWidth:1,
    borderRadius:2,
    borderColor:IbanInputColors.normal.border,
    fontSize:18,
    backgroundColor:IbanInputColors.normal.background,
  },
  errorText:{
    color:IbanInputColors.error.text,
    backgroundColor:IbanInputColors.error.background,
    padding:5,
    fontSize:14
  }
});
