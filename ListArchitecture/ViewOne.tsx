import React, {FC} from 'react';

import { StyleSheet, Text, TextInput, View } from 'react-native';
import MyClass from './MyClass';
import {useState, useEffect} from 'react';
import ViewTwo from './ViewTwo';

interface Props {
    state: MyClass;
}

const ViewOne: FC<Props> = ({ state }) => {
    const [shownText, setShownText] = useState(state.getText());

    useEffect(() => {
        state.setText(shownText)
    }, [shownText])

    return (
        <View>
            <Text>{"TEXT: " + shownText}</Text>
            <TextInput
                style={styles.input}
                onChangeText={setShownText}
                value={shownText}
            />
        </View>
    )
  };

const styles = StyleSheet.create({
input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
},
});
  
  export default ViewOne;