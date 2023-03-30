import React, {FC} from 'react';
import { Text, View } from 'react-native';

interface Props {
  text: string;
  repeat: number;
}

const CoolerText: FC<Props> = ({
  text, repeat
}) => {
  let components = []
  for (let i = 0; i < repeat; i++) {
    components.push(<Text>Repeat {i}: {text}</Text>)
  }

  return (
    <View>
      {components}
    </View>
  )
};

export default CoolerText;