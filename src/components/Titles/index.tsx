import {  Text, View } from "react-native";
import {  MaterialCommunityIcons } from  '@expo/vector-icons'
import { styles } from "./style";

type Props ={
    title:string;
}

export default function Titles({title}:Props) {

    return (
      <View style={styles.container}>
          <MaterialCommunityIcons
          
          name='account-search'
          color='#5E60CE'  
          size={24}  
          />
          <Text style={styles.do}>{title}</Text>
      </View> 
    );
  }
  