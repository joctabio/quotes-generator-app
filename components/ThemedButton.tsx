import { TouchableOpacity, type TouchableOpacityProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import { Colors } from '@/constants/Colors';

export type ThemedButtonProps = TouchableOpacityProps & {
  lightColor?: string;
  darkColor?: string;
  type?: keyof typeof Colors.light & keyof typeof Colors.dark;
};

export function ThemedButton({
  style,
  lightColor,
  darkColor,
  type = 'background',
  ...otherProps
}: ThemedButtonProps) {
  const backgroundColor = useThemeColor({}, type);

  return (
    <TouchableOpacity style={[{ backgroundColor }, style]} {...otherProps} />
  );
}
