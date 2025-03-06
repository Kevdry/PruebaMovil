import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

const UserList = ({ users }) => {
  return (
    <View>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name} - {item.email}</Text>
            <TouchableOpacity onPress={() => alert(`Eliminar usuario ${item.name}`)}>
              <Text>Eliminar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert(`Editar usuario ${item.name}`)}>
              <Text>Editar</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default UserList;
