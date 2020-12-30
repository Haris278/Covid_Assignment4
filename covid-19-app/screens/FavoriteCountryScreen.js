import axios from 'axios';
import * as React from 'react';
import {
  ActivityIndicator,
  Button,
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Ionicons,
  AsyncStorage,
} from 'react-native';
import { useState, useEffect } from 'react';
import { Searchbar } from 'react-native-paper';
import 'react-native-vector-icons';
import { Icon } from 'react-native-elements';

const Favorite = () => {
  const [data, setData] = useState([]);


  const getItems = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      setData(keys)
    } catch (error) {
      console.error(error);
    }
  };

  const remove = async (item) => {
    await AsyncStorage.removeItem(item)
  }

  useEffect(() => {
    getItems();
  }, [data]);

  return (
    <View style={{ paddingTop: 30 }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 24,
              paddingTop: 24,
              paddingBottom: 30,
              marginLeft: 55,
            }}>
            Favorite Country Screen
          </Text>
          <FlatList
            keyExtractor={(item, index) => index}
            data={data}
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={0.5}
                >
                <View
                  style={{
                    flexDirection: 'row',
                    padding: 10,
                    borderColor: 'grey',
                    borderBottomWidth: 1,
                  }}>
                  <View
                    style={{
                      paddingLeft: 5,
                      paddingRight: 10,
                      flexDirection: 'row',
                    }}>
                    <Text>{JSON.stringify(item).slice(1, -1)}</Text>
                  </View>
                  <TouchableOpacity >
                    <Icon
                      reverse
                      name='star'
                      color="royalblue"
                      type="ionicon"
                      onPress={() => remove(item)}
                    />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
  );
};

export default Favorite;
