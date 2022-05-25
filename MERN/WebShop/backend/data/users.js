import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    idAdmin: true,
  },
  {
    name: 'Les Open',
    email: 'les@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Tom Poll',
    email: 'tom@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
