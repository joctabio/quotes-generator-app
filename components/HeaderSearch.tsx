import {
  TouchableOpacity,
  TextInput,
  StyleSheet,
  View,
  Dimensions
} from 'react-native';
import { ThemedIcon } from './ThemedIcon';
import { ICON_SIZE, SIZES, FONT } from '@/constants/Theme';
import { Colors } from '@/constants/Colors';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { ThemedInput } from './ThemedInput';

const ScreenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    width: ScreenWidth - 30,
    padding: 0,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'stretch',

    // marginTop: SIZES.medium,
    marginBottom: SIZES.medium,
    height: 45
    // backgroundColor: 'red'
    // flex: 1
  },
  searchField: {
    paddingLeft: SIZES.small,
    paddingRight: SIZES.small,
    borderRadius: SIZES.small,
    flex: 1,
    fontFamily: FONT.regular
  },
  backButton: {
    marginRight: SIZES.medium,
    alignSelf: 'center'
  },
  searchButton: {
    marginLeft: SIZES.medium,
    alignSelf: 'center'
    // alignSelf: 'flex-end'
  }
});

const HeaderSearch = () => {
  const [searchText, setSearchText] = useState('');
  const [showSearchBar, setShowSearchBar] = useState(false);

  const router = useRouter();

  const handlePressBack = () => {
    setShowSearchBar(false);
    setSearchText('');
  };

  const handlePress = () => {
    if (showSearchBar && searchText.length > 0) {
      handleSubmit();
    } else {
      setShowSearchBar(true);
    }
  };

  const handleOnChangeText = (value: string) => {
    setSearchText(value);
  };

  const handleSubmit = () => {
    router.push(`/search/${searchText}`);
  };

  return (
    <View style={styles.container}>
      {showSearchBar && (
        <TouchableOpacity onPress={handlePressBack} style={styles.backButton}>
          <ThemedIcon
            name='arrow-back-outline'
            size={ICON_SIZE.cta}
            darkColor={Colors.dark.text}
          />
        </TouchableOpacity>
      )}
      {showSearchBar && (
        <ThemedInput
          style={styles.searchField}
          value={searchText}
          onChangeText={handleOnChangeText}
          onSubmitEditing={handleSubmit}
          placeholder='Search by Author'
          autoFocus
        />
      )}
      <TouchableOpacity onPress={handlePress} style={styles.searchButton}>
        <ThemedIcon
          name='search-outline'
          size={ICON_SIZE.cta}
          darkColor={Colors.dark.text}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderSearch;
