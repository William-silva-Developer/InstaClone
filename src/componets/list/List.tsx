import React from 'react';
import { View, Text } from 'react-native';

import { RouteProp, useRoute} from '@react-navigation/native';
 import { Container } from './styles';

interface PropsParams {
  data: {
  };
}


type PropRouteParams = {
  List:{
    id: string;
    nome: string;
    descricao: string;
    imgperfil: string;
    imgPublicacao: string;
    likeada: boolean;
    likers: string;
  }
};

type ParamsProps = RouteProp<PropRouteParams,'List'>

 function List({ data  }: PropsParams) {

  const { params, name } = useRoute<ParamsProps>();


  
  return (
    <Container   >
      <Text>Nome: {params?.nome}</Text>
      
        
    </Container>

  )
}

export default List;