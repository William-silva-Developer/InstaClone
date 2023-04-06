import React from 'react';
import { Alert } from 'react-native';
import { api } from '../../service/Api';



 import { 
 Container, 
 ListFeeds, 
 AreaPerfilUser, 
 Text, 
 IconUser, 
 ImagePublic, 
 Main, 
 AreaLikes, 
 IconLike, 
 IconSend,
 AreaDescription,
 Decription, 
 Touchable,
 NomeUser,
 LikesNumber
 } from './styles';




type Props = {
id: string;
nome: string;
imgperfil: string;
imgPublicacao: string;
likeada: boolean;
likers: number;
};
 

const Feed: React.FC = () => {

  const [feedTrue, setFeedTrue] = React.useState<boolean>(false);
  const [feedId, setFeedId] = React.useState<number>();

  const [feeds, setFeeds] = React.useState<Props[]>([]);
  
  
  React.useEffect(() => {
    async function handleFeed(){
      await api.get('/feed',{
      headers: {
      "Content-Type": "application/json",
      }
      })
      .then( res => {
      setFeeds(res.data);
      
      })
      .catch( err => {
      if(err.status === 400){
        return Alert.alert('Erro','Algo deu errado',err.message);
      }
        return err.message;
      });
      
      
    }
    handleFeed();
  },[])
    
    



async function handleLikes(){

 console.log('handleLikes')

}


    
  return (
    <Container>
      <ListFeeds
      showshorizontalscrollindicator={false}
       data={feeds}
       keyExtractor={item => String(item.id)}
       renderItem={({item, index})=> (
       
       <Main>
       
          <AreaPerfilUser>
          
            <IconUser source={{uri: item.imgperfil}} risideMode='contain' />
            <Text>{item.nome}</Text>
            
          </AreaPerfilUser>
          
            <ImagePublic source={{uri: item.imgPublicacao}} risideMode='cover' />
          
          <AreaLikes>
            
            <Touchable onPress={()=> {
            handleLikes();
            }}>
              <IconLike source={item.likeada ? require('../../../assets/img/likeada.png') : require('../../../assets/img/like.png')} />
            </Touchable>
            
            <Touchable>
              <IconSend source={require('../../../assets/img/send.png')} />
            </Touchable>
            
            
          </AreaLikes>
          
            {item.likers > 0 ? <LikesNumber>{item.likers} {item.likers > 1 ? 'Curtidas' : 'Curtida'}</LikesNumber> : '' }
          
          <AreaDescription>
            <NomeUser>{item.nome}</NomeUser>
            <Decription>{item.descricao}</Decription>
          </AreaDescription>
          
       </Main>
       
       )  }
      />
    </Container>
  )
}

export default Feed;