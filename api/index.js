const array = [
  {
    name: "Jesús",
    email: "jesus@example.com",
    age: 22,
  },
  {
    name: "María",
    email: "María@example.com",
    age: 21,
  },
  {
    name: "Chester",
    email: "chester@example.com",
    age: 3,
  },
];

export const crearUsuario = (user) => {
  array.push(user);
};

export const obtenerUsuarios = () => {
  return array;
};
