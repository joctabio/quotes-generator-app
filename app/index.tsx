import Quote from '@/components/Quote';
import Footer from '@/components/Footer';
import {
  View,
  Dimensions,
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
  useColorScheme,
  Share,
  Alert
} from 'react-native';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Stack } from 'expo-router';
import HeaderSearch from '@/components/HeaderSearch';
import { API_URL } from '@/constants/Api';

const bgImageLight = require(`@/assets/images/app-background-light.png`);
const bgImageDark = require(`@/assets/images/app-background-dark.png`);

type QuoteDataType = {
  quote: string;
  author: string;
};

export default function Index() {
  const theme = useColorScheme() ?? 'light';
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [data, setData] = useState<QuoteDataType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const bgImage = theme === 'light' ? bgImageLight : bgImageDark;
  const width = Dimensions.get('window').width;

  const options = {
    method: 'GET',
    url: `${API_URL}/random`
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      const { data } = response;

      setData(data?.quote);
      setIsLoading(false);
    } catch (e) {
      alert('Something went wrong.');
      setIsLoading(false);
    }
  };

  const handleGenerate = () => {
    fetchData();
  };

  const handleSearchIcon = () => {};

  const handleShare = async () => {
    try {
      const result = await Share.share({
        message: `"${data?.quote}" \n\n\n-${data?.author}`
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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Stack.Screen
        options={{
          headerTitle: () => <HeaderSearch />,
          // headerRight: () => <HeaderSearch />,
          headerTransparent: true
        }}
      />
      <ImageBackground
        source={bgImage}
        resizeMode='stretch'
        resizeMethod='resize'
        style={styles.background}
      >
        <View style={{ flex: 1, justifyContent: 'center', width }}>
          {isLoading ? (
            <ActivityIndicator size='large' />
          ) : (
            <Quote text={data?.quote} author={data?.author} />
          )}

          <Footer
            handleGenerate={handleGenerate}
            handleShare={handleShare}
            isLoading={isLoading}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {}
});
