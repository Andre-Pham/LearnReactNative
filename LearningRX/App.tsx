import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyClass from './MyClass';
import { observeObject } from './ObserveObject';
import PillButton from './PillButton';
import ViewOne from './ViewOne';

/*
The issue is that the views are showing the hooks - there's nothing about the object that's being shown.
If I wanted it to behave correctly I would need to update the hook after the object is updated.
*/

export default function App() {
  let state = new MyClass("Starting Value")
  const [shownText, setShownText] = useState(state.text);
  state.observedObjectChange$.subscribe(changes => setShownText(changes.text))

  return (
    <View style={styles.container}>
      <ViewOne state={state}/>

      <ViewOne state={state}/>

      <Text style={styles.text}>{shownText}</Text>
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
  text: {
    color: 'red'
  }
});
