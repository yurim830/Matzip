import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import {colors} from '../constants/colors';

function CustomDrawerContent(props: DrawerContentComponentProps) {
  return (
    <SafeAreaView style={styles.container}>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={styles.bottomContainer}>
        <Text style={styles.settingText}>설정</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: colors.GRAY_200,
  },
  settingText: {
    fontSize: 16,
    color: colors.BLACK,
  },
});

export default CustomDrawerContent;
