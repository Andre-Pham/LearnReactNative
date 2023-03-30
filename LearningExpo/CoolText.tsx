import React, {FC} from 'react';
import { Text } from 'react-native';

interface Props {
  text: string;
}

const CoolText: FC<Props> = ({ text }) => {
  return (
    <Text>{text}</Text>
  )
};

export default CoolText;