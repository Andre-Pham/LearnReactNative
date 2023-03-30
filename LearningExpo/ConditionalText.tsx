import React, {FC} from 'react';
import { Text, View } from 'react-native';

interface Props {
  text1: string;
  text2: string;
  showText1: boolean;
}

const ConditionalText: FC<Props> = ({ text1, text2, showText1 }) => {
  let component;
  if (showText1) {
    component = <Text>{text1}</Text>
  } else {
    component = <Text>{text2}</Text>
  }

  return (
    <View>
      {component}
    </View>
  )
};

export default ConditionalText;