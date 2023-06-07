import { View, ScrollView, FlatList } from 'react-native';
import { styles } from './style';
import { useState } from 'react';
import Header from '../../components/Header';
import { Task } from '../../components/Task';
import Titles from '../../components/Titles';

export default function Todo() {

  const [listSuspects, setListSuspects] = useState<string[]>([ 'Cel. Mostarda','Prof. Black','Dona. Violeta','Sr. Marinho', 'Srta. Rosa', 'Dona. Branca' ]);
  const [listWeapons, setListWeapons] = useState<string[]>([ 'Faca','Castiçal','Revólver','Corda', 'Cano', 'Chave Inglesa' ]);
  const [listRooms, setListRooms] = useState<string[]>([ 'Hall','Sala de Estar','Cozinha','Sala de Jantar', 'Salão de Festas', 'Sala de Música', 'Salão de Jogos', 'Biblioteca', 'Escritório' ]);


  function handleDeleteSuspects(suspects:string){
    setListSuspects(prevState => prevState.filter( taskName => taskName !== suspects))
  }

  function handleDeleteWeapons(weapons:string){
    setListWeapons(prevState => prevState.filter( taskName => taskName !== weapons))
  }

  function handleDeleteRooms(rooms:string){
    setListRooms(prevState => prevState.filter( taskName => taskName !== rooms))
  }

  return (
    <View style={styles.container}>
      <Header/>
      <ScrollView>
        <Titles title='SUSPEITOS'/>  
        <FlatList
          data={listSuspects}
          keyExtractor={item => item}
          renderItem={({item, index}) =>(

            <Task
              onRemove={() => handleDeleteSuspects(item)}
              itens={item}
            />
          )}
        />

        <Titles title='ARMAS'/>  
        <FlatList
          data={listWeapons}
          keyExtractor={item => item}
          renderItem={({item, index}) =>(

            <Task
              onRemove={() => handleDeleteWeapons(item)}
              itens={item}
            />
          )}
        />

        <Titles title='APOSENTOS'/>  
        <FlatList
          data={listRooms}
          keyExtractor={item => item}
          renderItem={({item, index}) =>(

            <Task
              onRemove={() => handleDeleteRooms(item)}
              itens={item}
            />
          )}
        />
      </ScrollView>
    </View> 
  );
}
