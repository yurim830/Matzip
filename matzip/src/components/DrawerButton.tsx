import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, StyleSheet, View, Text} from 'react-native';

const DrawerButton = () => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.openDrawer()}>
      <View style={{backgroundColor: 'blue', padding: 10}}>
        <Text>서랍</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({});

export default DrawerButton;
