import React from 'react';
import { View } from 'react-native';

 import { Container } from './styles';
import { Header } from '../../componets/header';
import Feed from './../feed/Feed';






const Home: React.FC = () => {
  return (
    <Container>

      <Header />
      
      <Feed />
        
    </Container>

  )
}

export default Home;