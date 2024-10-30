import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { useGlobalSearchParams, Stack, useRouter } from 'expo-router';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { FONT, ICON_SIZE, SIZES } from '@/constants/Theme';
import SearchResultCard from '@/components/SearchResultCard';
import { ThemedView } from '@/components/ThemedView';
import { TouchableOpacity } from 'react-native';
import { ThemedIcon } from '@/components/ThemedIcon';
import { Colors } from '@/constants/Colors';
import { ThemedText } from '@/components/ThemedText';
import { API_URL } from '@/constants/Api';

const styles = StyleSheet.create({
  backButton: {}
});

const EmptySearchResult: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <ThemedIcon
        name={'search-outline'}
        size={100}
        lightColor={Colors.light.tint}
      />
      <ThemedText style={{ fontSize: SIZES.medium, opacity: 0.8 }}>
        No results found
      </ThemedText>
    </View>
  );
};

const Search: React.FC = () => {
  const router = useRouter();
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const params = useGlobalSearchParams();
  const { search } = params;

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const options = {
        method: 'GET',
        url: `${API_URL}/quotes`,
        params: {
          author: search
        }
      };

      const response = await axios.request(options);
      setData(response?.data?.quotes);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) return <ActivityIndicator />;

  return (
    <ThemedView style={{ paddingTop: 100, flex: 1 }}>
      <Stack.Screen
        options={{
          headerTitle: () => (
            <ThemedText style={{ fontFamily: FONT.medium }}>
              Search for "{search}"
            </ThemedText>
          ),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.back()}
              style={styles.backButton}
            >
              <ThemedIcon
                name='arrow-back-outline'
                size={ICON_SIZE.cta}
                darkColor={Colors.dark.text}
              />
            </TouchableOpacity>
          ),
          headerTransparent: true
        }}
      />
      <ThemedView style={{ flex: 1 }} type={'cardBackground'}>
        {data.length > 0 ? (
          <FlatList
            data={data}
            renderItem={({ item }) => <SearchResultCard quote={item.quote} />}
            keyExtractor={(item) => item?.quote}
            contentContainerStyle={{ columnGap: SIZES.medium }}
          />
        ) : (
          <EmptySearchResult />
        )}
      </ThemedView>
    </ThemedView>
  );
};

export default Search;
