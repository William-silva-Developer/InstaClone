import React from 'react';
import { View } from 'react-native';

 import { Container, ImageLogo, ImageSend, ButtonLogo, ButtonSend } from './styles';

 import Logo from '../../../assets/img/logo.png';
 import Send from '../../../assets/img/send.png';

const Header: React.FC = () => {
  return (
    <Container>
      <ButtonLogo onPress={()=> alert('Clicou')}>
        <ImageLogo risideMode='contain' source={Logo} />
      </ButtonLogo>

      <ButtonSend onPress={()=> alert('Clicou')}>
        <ImageSend risideMode='contain' source={Send} />
      </ButtonSend>

    </Container>
  )
}

export {Header};