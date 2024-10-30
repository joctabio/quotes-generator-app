import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

import { ThemedIcon } from './ThemedIcon';
import { Colors } from '@/constants/Colors';

const styles = StyleSheet.create({
  container: {
    //
  }
});

const ScreenHeaderButton = ({
  icon,
  size,
  handlePress
}: {
  icon: string;
  size: any;
  handlePress: () => void;
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <ThemedIcon name={icon} size={size} darkColor={Colors.dark.text} />
    </TouchableOpacity>
  );
};

export default ScreenHeaderButton;
