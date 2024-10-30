/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#11181C',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    card: '#fff',
    cardBackground: '#e6e6e6',
    button: '#e6e6e6',
    buttonPrimary: '#FFE5B4',
    input: 'rgba(0,0,0,0.08)'
  },
  dark: {
    text: '#ECEDEE',
    background: '#000',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    card: '#000',
    cardBackground: '#151718',
    button: '#575757',
    buttonPrimary: '#FFE5B4',
    input: 'rgba(255,255,255,0.3)'
  }
};
