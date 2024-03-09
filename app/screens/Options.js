import React, { Component } from 'react';
import { ScrollView, StatusBar, Platform, SafeAreaView, Linking, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ListItem, Separator } from '../components/List';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

const openURL = url =>
  Linking.openURL(url).catch(() => {
    Alert.alert('Sorry, something went wrong.', 'Please try again later.');
  });

class Options extends Component {
  handlePressThemes = () => {
    console.log('press themes');
  };

  handlePressSite = () => {
    console.log('press site');
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1}}>
        <ScrollView>
          <StatusBar translucent={false} barStyle="default" />
          <ListItem
            text="Themes"
            onPress={() => openURL('https://google.com')}
            customIcon={
              <Ionicons name={`arrow-forward`} size={ICON_SIZE} color={ICON_COLOR} />
            }
          />
          <Separator />
          <ListItem
            text="Fixer.io"
            onPress={() => openURL('htttps://google.com')}
            customIcon={<Ionicons name={`link`} size={ICON_SIZE} color={ICON_COLOR} />}
          />
          <Separator />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
export default Options;