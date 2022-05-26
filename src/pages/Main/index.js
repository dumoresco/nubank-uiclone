import React from 'react';

import {Animated, style} from 'react-native';
import {PanGestureHandler, State} from 'react-native-gesture-handler';

import Header from '~/components/header';
import Tabs from '~/components/tabs';
import {
  Container,
  Content,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Annotation,
  Title,
  Description,
} from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Menu from '~/components/Menu';

export default function Main() {
  const translateY = new Animated.Value(0);

  const animatedValue = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    {useNativeDriver: true},
  );

  function onHandlerStateChange(event) {}

  return (
    <Container>
      <Header />
      <Content>
        <Menu />
        <PanGestureHandler
          onGestureEvent={animatedValue}
          onHandlerStateChange={onHandlerStateChange}>
          <Card
            style={{
              transform: [
                {
                  translateY: translateY.interpolate({
                    inputRange: [0, 380],
                    outputRange: [0, 380],
                  }),
                },
              ],
            }}>
            <CardHeader>
              <Icon name="attach-money" color="#666" size={28} />
              <Icon name="visibility-off" color="#666" size={28} />
            </CardHeader>
            <CardContent>
              <Title>Saldo disponível</Title>
              <Description>R$ 5.250,15</Description>
            </CardContent>
            <CardFooter>
              <Annotation>
                Transferencia de R$ 20,00 de Carolina Fontoura hoje ás 16:02
              </Annotation>
            </CardFooter>
          </Card>
        </PanGestureHandler>
      </Content>
      <Tabs />
    </Container>
  );
}
