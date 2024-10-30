import { FONT, ICON_SIZE, SIZES } from '@/constants/Theme';
import { Alert, Share, StyleSheet, Text, View } from 'react-native';
import * as Clipboard from 'expo-clipboard';

import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedButton } from '@/components/ThemedButton';
import { ThemedIcon } from '@/components/ThemedIcon';

const styles = StyleSheet.create({
  container: {
    margin: SIZES.medium,
    padding: SIZES.large,
    borderRadius: SIZES.medium
  },
  quote: {
    fontFamily: FONT.bold
  },
  footer: {
    marginTop: SIZES.xxLarge,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    columnGap: 10
  }
});

const SearchResultCard = ({ quote }: { quote: string }) => {
  const handleShare = async () => {
    try {
      const result = await Share.share({
        message: `"${quote}"`
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  const handleCopy = async () => {
    await Clipboard.setStringAsync(`"${quote}"`);
    Alert.alert('Copied!');
  };

  return (
    <ThemedView style={styles.container} type={'card'}>
      <View>
        <ThemedText style={styles.quote}>"{quote}"</ThemedText>
      </View>
      <View style={styles.footer}>
        <ThemedButton onPress={handleCopy}>
          <ThemedIcon name={'copy-outline'} size={ICON_SIZE.cta} />
        </ThemedButton>
        <ThemedButton onPress={handleShare}>
          <ThemedIcon name={'share-outline'} size={ICON_SIZE.cta} />
        </ThemedButton>
      </View>
    </ThemedView>
  );
};

export default SearchResultCard;
