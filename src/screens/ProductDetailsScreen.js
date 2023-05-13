import { StyleSheet, 
    View, 
    Image, 
    useWindowDimensions, 
    Text,
    ScrollView, 
    Pressable } from "react-native";

import products from "../data/products";
import { FlatList } from "react-native";

const ProductDetailsScreen = () => {

  const product = products[0];

  const {width}= useWindowDimensions();

  const addToCard = () =>{

        console.warn('ADDED TO CARD');

  };

  return (
    <View>
      {/* Image Carousel */}
      <ScrollView>

      <FlatList 
      data={product.images}
      renderItem={({item}) => (
        <Image 
        source={{uri: item}} 
        style={{width: width, aspectRatio: 1}}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      />
        


      {/* Title */}
        <Text style={styles.name}>{product.name}</Text>

      {/* Price */}
      <Text style={styles.price}>${product.price}</Text>

      {/* Description */}
      <Text style={styles.desription}>{product.description}</Text>
      </ScrollView>
      {/* Add to cart button */}
      <Pressable style={styles.button} onPress={addToCard}>
        <Text style={styles.text}>ADD TO CART</Text>
      </Pressable>

      {/* Navigation icon */}

      
    </View>
  );
};

const styles = StyleSheet.create({
    name:{
        fontSize:30,
        justifyContent:'flex-start',
        marginLeft:20,
        marginTop:20,
        fontWeight:'bold'
    },
    price:{
        fontSize:20,
        justifyContent:'flex-start',
        marginLeft:20,
        

    },
    desription:{
        marginRight:20,
        justifyContent:'flex-start',
        marginLeft:20,
        marginTop:20,
        marginBottom:20,
        lineHeight:20
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

export default ProductDetailsScreen;