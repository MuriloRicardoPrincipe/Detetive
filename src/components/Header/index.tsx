import {  View, Text  } from 'react-native';
import {  MaterialCommunityIcons } from  '@expo/vector-icons'
import { styles } from './style';

export default function Header() {

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
          name='account-search'
          color='#5E60CE'  
          size={40}  
          />
        <Text style={styles.to}>dete</Text>
        <Text style={styles.do}>tive</Text>
    </View> 
  );
}
