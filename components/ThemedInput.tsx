import { TextInput, type TextInputProps, StyleSheet } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedInputProps = TextInputProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedInput({
  style,
  lightColor,
  darkColor,
  ...rest
}: ThemedInputProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'input'
  );
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <TextInput
      style={[styles.input, { backgroundColor, color }, style]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  input: {}
});
