import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Card, List, ListItem, Button } from 'react-native-elements';

const HomeScreen = (props) => {
  const { name, username, phone, email, website } = props.navigation.state.params;
  const photoUrl = 'https://s3.us-east-2.amazonaws.com/g54capstone/person-placeholder.png';
  return (
    <Card
      title={name}
      image={{uri:photoUrl}}
      imageStyle={styles.photoImage}
      >
      <List containerStyle={styles.listContainer}>
        <ListItem
          title={phone}
          hideChevron={true}
        />
        <ListItem
          title={email}
          hideChevron={true}
        />
        <ListItem
          title={username}
          hideChevron={true}
        />
      </List>
      <Button
        raised
        title='Edit' />
    </Card>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  listContainer: {
    marginBottom: 20
  },
  photoImage: {
    height: 250,
    width: 343
  }
});
