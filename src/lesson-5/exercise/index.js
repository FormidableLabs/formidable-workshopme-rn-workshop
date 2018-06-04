import React, { Component } from 'react';
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
  render() {
    return (
      <Container
        style={{ marginTop: Platform.select({ ios: 20, android: 0 }) }}
      >
        <Content>
          <Form>
            <Item>
              <Input placeholder="Field" />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}
