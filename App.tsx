import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, TextInput } from 'react-native';
import { IbanInputColors } from './constants/colors';
import { useState } from 'react';

export default function App() {
  const [iban,setIban] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
          editable
          multiline
          numberOfLines={4}
          //onChangeText={text => onChangeText(text)}
          style={styles.textInput}
          placeholder='TR __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __'
          maxLength={24}
          value={iban}
        />
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
  textInput:{
    borderWidth:1,
    borderRadius:2,
    borderColor:IbanInputColors.normal.border,
    padding: 10,
    margin:10,
    backgroundColor:IbanInputColors.normal.background,
  }
});
