import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { ThemedView } from './ThemedView';
import { ThemedText } from './ThemedText';
import { ThemedButton } from './ThemedButton';
import { FONT, ICON_SIZE, SIZES } from '@/constants/Theme';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ThemedIcon } from './ThemedIcon';
import { Colors } from '@/constants/Colors';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingLeft: SIZES.xxLarge,
    paddingRight: SIZES.xxLarge,
    paddingBottom: 70,
    paddingTop: SIZES.medium,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  button: {
    margin: SIZES.xSmall,
    borderRadius: 50,
    alignItems: 'center'
    // flex: 1,
    // marginRight: SIZES.medium
  },
  share: {
    // padding: SIZES.large,
    // borderRadius: 50,
    // alignItems: 'center'
  },
  buttonText: {
    fontFamily: FONT.bold,
    fontSize: SIZES.medium,
    textTransform: 'uppercase'
  }
});

const Footer = ({
  handleGenerate,
  handleShare,
  isLoading
}: {
  handleGenerate: () => void;
  handleShare: () => void;
  isLoading?: boolean;
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={handleGenerate}
        disabled={isLoading}
      >
        <ThemedIcon size={ICON_SIZE.cta} name='refresh-outline' />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleShare}>
        <ThemedIcon size={ICON_SIZE.cta} name='share-outline' />
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
