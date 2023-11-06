import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin',
        email: 'admin@example.com',
        password: bcrypt.hashSync("123456", 10),
        isAdmin: true,
    },
    {
        name: 'todd',
        email: 'toddy9229@outlook.com',
        password: bcrypt.hashSync("macv0554", 10),
        isAdmin: true,
    }
]

export default users