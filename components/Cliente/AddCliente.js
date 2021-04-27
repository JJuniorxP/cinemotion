import React from 'react';
import { useState } from 'react';
import { Modal, StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';
const AddCliente = (props) => {
  const initialClienteState = {
    name: "",
    age: "",
    cpf: ""
  }

  const [cliente, setCliente] = useState(initialClienteState)
  const { isOpen, closeModal } = props

  const handleChange = (value, name) => {
    setCliente({...cliente, [name]: value})
  }

  const addCliente = async () => {
   props.addCliente(cliente)
  }

  return(
    <Modal  
      visible = {isOpen}
      onRequestClose = {closeModal}
      animationType = "slide"
    >
      
      <View style={styles.container}>
        <Text style = {styles.title}>Adicionar novo cliente</Text>
        <TextInput
          placeholder = "Digite o nome"
          style={styles.texBox}
          onChangeText = {(text) => handleChange(text, "name")}
        >
        </TextInput>

        <TextInput
          placeholder = "Digite a Idade"
          style={styles.texBox}
          onChangeText = {(text) => handleChange(text, "age")}
          keyboardType="numeric"
        >
        </TextInput>

        <TextInput
          placeholder = "Digite o CPF"
          style={styles.texBox}
          onChangeText = {(text) => handleChange(text, "cpf")}
          keyboardType="numeric"
        >
        </TextInput>

        <View style = {styles.buttonContainer}>
          <TouchableOpacity
            onPress = {AddCliente}
            style = {{...styles.button, marginVertical: 0}}
          >
            <Text style = {styles.buttonText}>Salvar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress = {closeModal}
            style = {{...styles.button, marginVertical: 0, marginLeft:10, backgroundColor: "tomato"}}
          >
            <Text style = {styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>

      </View>

    </Modal>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontWeight: "bold",
      fontSize: 20,
      marginBottom: 20,
    },
    texBox: {
      borderWidth: 1,
      borderRadius: 6,
      marginBottom: 15,
      fontSize: 18,
      padding: 10
    },
    buttonContainer:{
      marginTop: 10,
      flexDirection: "row",
      alignItems: "center"
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
    }

  });
  
  export default AddCliente