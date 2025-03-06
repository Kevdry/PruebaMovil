
let usersDatabase = [
  { id: 1, name: 'Novita', email: 'novita@hotmail.com' },
  { id: 2, name: 'Ana García', email: 'ana@gmail.com' },
  { id: 2, name: 'Juanucho', email: 'juan@hotmail.com' },
  { id: 2, name: 'Alexis', email: 'alexis@gmail.com' },
];

export const simulateDatabase = {
  getUsers: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(usersDatabase);
      }, 500);
    });
  },
  getUserById: (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const user = usersDatabase.find((user) => user.id === id);
        resolve(user);
      }, 500);
    });
  },
  addUser: (name, email) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newUser = { id: usersDatabase.length + 1, name, email };
        usersDatabase.push(newUser);
        resolve(newUser);
      }, 500);
    });
  },
  updateUser: (id, name, email) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const userIndex = usersDatabase.findIndex((user) => user.id === id);
        if (userIndex !== -1) {
          usersDatabase[userIndex] = { id, name, email };
          resolve(usersDatabase[userIndex]);
        }
      }, 500);
    });
  },
  deleteUser: (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        usersDatabase = usersDatabase.filter((user) => user.id !== id);
        resolve();
      }, 500);
    });
  },
};
