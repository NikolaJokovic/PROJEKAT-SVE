import bcrypt from 'bcryptjs';



const users = [
    {
        name:"Admin",
        email:"nikolajokovic10@gmail.com",
        password:bcrypt.hashSync("andjela20",10),
        isAdmin:true ,
    },
    {
        name:"User",
        email:"user@example.com",
        password:bcrypt.hashSync("123456",10),
        
    }

  ];
  
  export default users;
  