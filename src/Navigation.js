import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import ProductsScreen from "./screens/ProductScreens";
import ShoppingCard from "./screens/ShoppingCard";
import { Pressable, Text } from "react-native";

import {FontAwesome5} from '@expo/vector-icons';

const Stack = createNativeStackNavigator();


const Navigation = () =>{

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='ProductsScreen' component={ProductsScreen} 
                options={({navigation})=>({headerRight: ()=> (
                <Pressable style={{flexDirection:'row'}} onPress={() => navigation.navigate('ShoppingCart') }>
                    <FontAwesome5 size={18} name='shopping-cart' color='gray'></FontAwesome5>
                    <Text style={{marginLeft:5, fontWeight:'500'}}>1</Text>
                    </Pressable>
                )})}/>
                <Stack.Screen name='Product' component={ProductDetailsScreen} />
                <Stack.Screen name='ShoppingCart' component={ShoppingCard} />
            </Stack.Navigator>
        </NavigationContainer>
    );
} 

export default Navigation;