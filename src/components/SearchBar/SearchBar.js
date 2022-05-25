import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import styles from './SearchBar.Style';
const SearchButton = () => {
  const [input, setInput] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Ara..."
        value={input}
        onChangeText={setInput}
      />
    </View>
  );
};

export default SearchButton;