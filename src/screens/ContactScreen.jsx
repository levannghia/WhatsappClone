/* eslint-disable */
import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import ContactHeader from '../components/ContactHeader';
import ContactList from '../components/ContactList';
import {Colors} from '../theme/Colors';

const ContactScreen = props => {
  // const {userId} = props.route.params;

  return (
    <ScrollView style={styles.scrollViewStyle}>
      <ContactHeader />
      <ContactList userId={"9SKcOEBlRbz4DFf6b7FO"}/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewStyle: {
    backgroundColor: Colors.background,
  },
});

export default ContactScreen;