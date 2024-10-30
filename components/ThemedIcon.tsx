import { TouchableOpacity } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import { Ionicons } from '@expo/vector-icons';
import { StyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet';
import { ViewStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
import { IconProps } from '@expo/vector-icons/build/createIconSet';

export type ThemedIconProps = IconProps<any> & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedIcon({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedIconProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'icon');

  return <Ionicons style={[{ color }, style]} {...otherProps} />;
}
