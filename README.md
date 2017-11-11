# [React Native Meetup 11/9/17](https://www.meetup.com/ltcphx/events/244849005)

Please use the completed repository as your reference.

## Building your first React Native app

Do you want to learn how to build native apps for both iOS and Android with a single code base and JavaScript/React skills? React Native will allow you to do that. This meetup will assume some knowledge of JavaScript and React.

I will walk you through building a simple list/detail app from scratch and then it's your turn! Crack open your laptops and let's code!

See the screenshots of the finished app below.

![alt text][logo]

[logo]: images/list-detail.png "List Details"

### Getting started

Install CRNA
```
npm install -g create-react-native-app
```

Create your app
```
create-react-native-app <your-app-name>
```

Switch to the newly created directory, for example:

```
cd <your-app-name>
```

### Libraries

I recommend using [React Navigation](https://reactnavigation.org/) for routing, [React Native Elements UI Toolkit](https://react-native-training.github.io/react-native-elements/) for styling, and [Axios](https://www.npmjs.com/package/axios) to connect to the data provider.

I used [JSON Placeholder](https://jsonplaceholder.typicode.com/) for data provider.

```
npm install --save axios react-native-elements react-navigation
```
or
```
yarn add axios react-native-elements react-navigation
```

### Let's Code!

Use your favorite editor (e.g., [Atom](https://atom.io/)) to add/modify the code. You can test your app using the following command:

```
npm start
```
or
```
yarn start
```

### Add navigation

* Create components folder, add the following
  * Home.js
  * Details.js

```
const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Home',
    })
  },
  Details: {
    screen: DetailScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Detail',
    })
  },
});
```

### List Page

In Home.js make a call to JSON Placeholder data as the data provider.

```
componentDidMount() {
  axios.get(`https://jsonplaceholder.typicode.com/users`).then(result => this.setState( { users: result.data } ));
}
```

Create a function to transform the data

```
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
```

Use React Native Elements Card and ListItem to format the data

```
<ScrollView>
  <View style={styles.headerContainer}>
    <Icon color="white" name="face" size={62} />
    <Text style={styles.heading}>Users</Text>
  </View>
  <Card containerStyle={styles.container}>
    { this.getUsers() }
  </Card>
</ScrollView>
```

Add some styling

```
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
```

### Details Page

In Details.js, use React Native Elements Card and List to format the data

```
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
```

Add some styling

```
const styles = StyleSheet.create({
  listContainer: {
    marginBottom: 20
  },
  photoImage: {
    height: 250,
    width: 343
  }
});
```
