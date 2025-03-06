import React, { useState } from 'react';
import { TextInput, Button, View } from 'react-native';

const AddUser = ({ onAddUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleAdd = () => {
    onAddUser(name, email);
    setName('');
    setEmail('');
  };

  return (
    <View>
      <TextInput
        placeholder="Nombre"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Correo Electrónico"
        value={email}
        onChangeText={setEmail}
      />
      <Button title="Agregar Usuario" onPress={handleAdd} />
    </View>
  );
};

export default AddUser;
