import React, {Component} from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { Card, ListItem, Icon } from 'react-native-elements';
import axios from 'axios';

class HomeScreen extends Component {

  constructor() {
    super();
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(result => this.setState( { users: result.data } ));
  }

  getUsers() {
    const { navigate } = this.props.navigation;
    const photoUrl = 'https://s3.us-east-2.amazonaws.com/g54capstone/person-placeholder.png';
    return this.state.users.map(user =>
      <ListItem
        key={user.id}
        title={user.name}
        roundAvatar
        avatar={{uri:photoUrl}}
        onPress={() => navigate('Details', user)}
      />
    );
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.headerContainer}>
          <Icon color="white" name="face" size={62} />
          <Text style={styles.heading}>Users</Text>
        </View>
        <Card containerStyle={styles.container}>
          { this.getUsers() }
        </Card>
      </ScrollView>
    )
  }

}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 15
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#FF9033',
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22,
  }
});
