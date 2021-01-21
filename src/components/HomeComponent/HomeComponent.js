import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {styles} from './styles';

import {getDataUsingSimpleGetCall, simplePostCall} from '../../actions/get';

const HomeComponent = () => {
  const [albums, setalbums] = useState([]);

  useEffect(() => {
    getDataGlobalCall();
  }, []);

  const getDataGlobalCall = async () => {
    const res = await getDataUsingSimpleGetCall();
    setalbums(res.data);
  };

  return (
    <SafeAreaView>
      <View style={styles.Container}>
        <View style={styles.TextView}>
          <TouchableOpacity onPress={getDataUsingSimpleGetCall}>
            <Text style={styles.Text}>Simple Get Call</Text>
          </TouchableOpacity>
        </View>
        {/* <FlatList
          data={albums}
          renderItem={({item}) => (
            <View>
              <Text>{item.title}</Text>
            </View>
          )}
        /> */}
        <View style={styles.TextView}>
          <TouchableOpacity onPress={simplePostCall}>
            <Text style={styles.Text}>Simple post Call</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeComponent;
