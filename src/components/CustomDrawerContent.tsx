import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import React, {use} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
} from 'react-native';
import {colors} from '../constants/colors';

function CustomDrawerContent(props: DrawerContentComponentProps) {
  return (
    <SafeAreaView style={styles.container}>
      <DrawerContentScrollView
        {...props}
        scrollEnabled={false}
        contentContainerStyle={styles.contentContainer}>
        <Pressable style={styles.profileContainer}>
          <View style={styles.userImageContainer}>
            <Image
              source={require('../assets/default-user.png')}
              style={styles.userImage}
            />
          </View>
          <Text style={styles.nickname}>닉네임</Text>
        </Pressable>
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
  contentContainer: {
    gap: 5,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 30,
    gap: 5,
  },
  userImageContainer: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  userImage: {
    height: '100%',
    width: '100%',
  },
  nickname: {
    fontSize: 14,
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
