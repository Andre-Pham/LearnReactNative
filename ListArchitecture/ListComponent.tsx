
import React, {FC} from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import PillButton from './PillButton';
import { useState } from 'react';
import Model from './Model';
import useForceUpdate from 'use-force-update';

const ListComponent: FC = () => {

  const forceUpdate = useForceUpdate()

  let listComponents = []
  for (let item of Model.toDoList.getList()) {
    listComponents.push(<Text key={item}>{item}</Text>)
  }

  Model.store.subscribe(() => {
    forceUpdate()
    console.log(Model.store.getState())
  })

  return (
    <View>
      {listComponents}
    </View>
  )
};

export default ListComponent;