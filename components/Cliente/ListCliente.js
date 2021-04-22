import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function ListCliente(){
  return(
      <View style = {styles.container}>
        <Text>Tela Cliente</Text>
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
  export default ListCliente