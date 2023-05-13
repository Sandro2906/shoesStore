import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import products from '../data/products'
import Navigation from '../Navigation';
import { useNavigation } from '@react-navigation/native';

const ProductsScreen = () => {

  const navigation = useNavigation();
  return (
      <FlatList 
        data={products}
        renderItem={({item}) => (
        <TouchableOpacity onPress={() => navigation.navigate('Product')} style={styles.itemContainer}>
        <Image source={{uri: item.image}} 
        style={styles.image}/>
        </TouchableOpacity>
      )}
      numColumns={2}
      />
  );
}

const styles = StyleSheet.create({
  image:{
    width:'100%',
    aspectRatio:1
  },
  itemContainer:{
    width:'50%',
    padding:1
  }
});
export default ProductsScreen;