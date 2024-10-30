import { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import axios from 'axios';

import { FONT, SIZES } from '@/constants/Theme';
import { useThemeColor } from '@/hooks/useThemeColor';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: SIZES.large,
    paddingRight: SIZES.large,
    paddingBottom: SIZES.xxLarge,
    paddingTop: SIZES.xxLarge,
    borderRadius: SIZES.large,
    margin: SIZES.large
  },
  quote: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    lineHeight: SIZES.xxLarge,
    marginBottom: SIZES.xxLarge
  },
  author: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    justifyContent: 'flex-end',
    alignSelf: 'flex-end'
  }
});

type QuoteType = {
  text: string | undefined;
  author: string | undefined;
};

const Quote = ({ text, author }: QuoteType) => {
  const color = useThemeColor({}, 'card');

  if (!text || !author) return null;

  return (
    <View style={styles.container}>
      <ThemedText style={styles.quote}>"{text}"</ThemedText>
      <ThemedText style={styles.author}>- {author}</ThemedText>
    </View>
  );
};

export default Quote;
