
import React, {FC} from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import PillButton from './PillButton';
import { useState } from 'react';
import Model from './Model';

const ListComponent: FC = () => {

  let listComponents = []
  for (let item of Model.toDoList.getList()) {
    listComponents.push(<Text key={item}>{item}</Text>)
  }

  return (
    <View>
      {listComponents}
    </View>
  )
};

export default ListComponent;