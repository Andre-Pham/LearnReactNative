import React, {FC} from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import PillButton from './PillButton';
import { useState } from 'react';
import Model from './Model';

const AddView: FC = () => {

  const [inputText, onChangeInputText] = useState('Default');

  const addItem = (item: string) => {
    Model.toDoList.addItem(item)
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeInputText}
        value={inputText}
      />

      <PillButton label='Add' onPress={() => addItem(inputText)}></PillButton>
    </View>
  )
};

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

export default AddView;