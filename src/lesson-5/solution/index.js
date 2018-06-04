import React, { Component } from 'react';
import { Platform, View } from 'react-native';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Card,
  Text,
  Switch,
} from 'native-base';

export default class App extends Component {
  state = {
    username: '',
    password: '',
    remember: false,
  };
  render() {
    return (
      <Container
        style={{ marginTop: Platform.select({ ios: 20, android: 0 }) }}
      >
        <Content>
          <Form>
            <Item>
              <Input
                placeholder="Username"
                value={this.state.username}
                onChangeText={text => {
                  this.setState({ username: text });
                }}
                floatingLabel
              />
            </Item>
            <Item>
              <Input
                placeholder="Password"
                value={this.state.password}
                onChangeText={text => {
                  this.setState({ password: text });
                }}
                floatingLabel
              />
            </Item>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'flex-start',
                flexDirection: 'row',
                margin: 15,
              }}
            >
              <Switch
                value={this.state.remember}
                onValueChange={val => this.setState({ remember: val })}
                style={{ marginRight: 15 }}
              />
              <Text>Remember?</Text>
            </View>
          </Form>
          <Card>
            <Text>Username: {this.state.username}</Text>
            <Text>Password: {this.state.password}</Text>
            <Text>Remember: {this.state.remember.toString()}</Text>
          </Card>
        </Content>
      </Container>
    );
  }
}
