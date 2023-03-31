import React, {FC} from 'react';
import { Text } from 'react-native';

interface Props {
  text: string;
}

const ViewTwo: FC<Props> = ({ text }) => {
  return (
    <Text>{text}</Text>
  )
};

export default ViewTwo;