import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import ConditionalText from './ConditionalText';
import CoolerText from './CoolerText';
import CoolText from './CoolText';
import MyClass from './MyClass';
import PillButton from './PillButton';
import {useState, useEffect} from 'react';

export default function App() {
  let myObject = new MyClass("Starting Text")

  const handleButtonPress = () => {
    console.log('Button pressed!');
  };

  const [shownText, setShownText] = useState(myObject.getText());
  const [inputText, onChangeInputText] = useState('Default');

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <CoolText text='Does it work?'/>
      <CoolerText text='are we there yet?' repeat={5}/>
      <StatusBar style="auto" />
      <ConditionalText text1='Show me!' text2='Hide me!' showText1={true}></ConditionalText>
      <PillButton label='My Button' onPress={handleButtonPress}></PillButton>
      <Text>{shownText}</Text>
      <PillButton label='Update Text' onPress={() => {setShownText(inputText)}}></PillButton>

      <TextInput
        style={styles.input}
        onChangeText={onChangeInputText}
        value={inputText}
      />
      <Text>{inputText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
