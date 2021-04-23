import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import AddCliente from './AddCliente';

function ListCliente(){

  const [isAddClienteModalOpen, setIsAddClienteModalOpen] = useState(false)
  const [clientes, setClientes] = useState([])

  const toggleAddCliente = () => {
    setIsAddClienteModalOpen(!isAddClienteModalOpen)
  }

  const addCliente = (data) => {
    setClientes([data, ...clientes])
  }

  return(
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity
          onPress = {toggleAddCliente}
          style = {{...styles.button}}
        >
          <Text style = {styles.buttonText}>Add Cliente</Text>
        
          {clientes.map((data, index) => {
            <View style = {styles.clienteListContainer}>
              <Text style = {styles.name}>{data.name}</Text>
              <Text style = {styles.listItem}>Idade: {data.age}</Text>
              <Text style = {styles.listItem}>CPF: {data.cpf}</Text>
            </View>
          })}

        </TouchableOpacity>

        {isAddClienteModalOpen ? <AddCliente
          isOpen = {isAddClienteModalOpen}
          closeModal = {toggleAddCliente}
          addCliente = {addCliente}
        /> : null}

        <Text style={styles.title}>Lista de Clientes:</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 20
    },
    title: {
      fontWeight: "bold",
      fontSize: 20,
      marginBottom: 20,
    },
    button:{
      borderRadius: 5,
      marginVertical: 20,
      alignSelf: 'flex-start',
      backgroundColor: "gray"
    },
    buttonText: {
      color: "white",
      paddingVertical: 6,
      paddingHorizontal: 10,
      fontSize: 16
    },
    name: {
      fontWeight: "bold",
      fontSize: 16
    },
    listItem: {
      fontSize: 16
    },
    clienteListContainer: {
      marginBottom: 25,
      elevation: 4,
      backgroundColor: "white",
      padding: 10,
      borderRadius: 6,
      borderTopWidth: 1,
    }
  });
  
  export default ListCliente