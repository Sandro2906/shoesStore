import {React} from "react";
import { Text,  View, StyleSheet, FlatList, Pressable } from "react-native";
import cart from '../data/cart';
import CartListItem from "../commponents/CartListItems";

const ShoppingCard = () => {
return(
    <>
    <FlatList 
    data={cart} 
    renderItem={({item}) => (<CartListItem cartItem={item} />)}
    ListFooterComponent={()=> (
        <View style={styles.subContainer}>
            <View style={styles.view}>
                <Text>Subtotal</Text>
                <Text>$255.00</Text>
            </View>
            <View style={styles.view}>
                <Text>Delivery</Text>
                <Text>$10.00</Text>
            </View>
            <View style={styles.view}>
                <Text style={styles.textTotal}>TOTAL</Text>
                <Text style={styles.textTotal}>$600.00</Text>
            </View>
        </View>
   ) }/>
   <Pressable style={styles.button} onPress={null}>
        <Text style={styles.text}>CHECKOUT</Text>
      </Pressable>
      </>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    subContainer:{
        padding:20,
        marginTop:10,
    },
    view:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    textTotal:{
        fontWeight:'bold'
    },
    button:{
        width:'80%',
        height:50,
        position:'absolute',
        bottom:30,
        alignSelf:'center',
        borderColor:'black',
        borderWidth:1,
        backgroundColor:'black',
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        color:'white',
        fontWeight:'bold',

    }
  });

export default ShoppingCard;