import React from 'react';
import { TouchableOpacity, StyleSheet, Text, ViewStyle } from 'react-native';

interface PillButtonProps {
  label: string;
  onPress: () => void;
}

const PillButton: React.FC<PillButtonProps> = ({ label, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container]}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#007AFF',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    minWidth: 80,
    alignItems: 'center',
  },
  label: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PillButton;