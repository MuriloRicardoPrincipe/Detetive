import { TouchableOpacity, View, Text } from "react-native";
import { styles } from './style';
import {  Feather } from  '@expo/vector-icons'

type Props ={
    itens:string;
    onRemove: () => void;
}

export function Task({itens,onRemove}:Props){
    return(
        <View style={styles.container}>
            <Text style={styles.TaskDescrition}>
                {itens}
            </Text>
            <TouchableOpacity onPress={onRemove}>
                <Feather
                    name='trash-2'
                    color='#808080'  
                    size={20}  
                />
            </TouchableOpacity>
        </View>
    )
}