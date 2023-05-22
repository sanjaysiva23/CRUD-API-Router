import { v4 as uuid } from 'uuid';

let users = [
    
];

export const getUsers = (req, res) => {
    console.log(`Users in the database: ${users}`);

    res.send(users);
}

export const createUser = (req, res) => {   
    const user = req.body;

    users.push({...user, id: uuid()});

    res.send(users);
    
    console.log(`User [${user.firstName}] added to the database.`);
};

export const getUser =('/:id', (req, res) => {
    const {id} = req.params;
    const foundUser=users.find((user)=>user.id == id)
    res.send(foundUser);
});

export const deleteUser =( '/:id',(req, res) => { 
    const {id} = req.params;
    console.log(`user with id ${req.params.id} has been deleted`);
    
    users = users.filter((user) => user.id !==id);
    res.send(users);
});

export const updateUser =  ('/:id',(req,res) => {
    const {id} = req.params;
    const user = users.find((user) => user.id === id);
    const {firstName,lastName,age}=req.body;
    
    if(firstName)
    {
        user.firstName=firstName;
    }
    if(lastName)
    {
        user.lastName=lastName;
    }
    if(age)
    {
        user.age=age;
    }
    console.log(`username has been updated to ${req.body.username}.age has been updated to ${req.body.age}`)
    res.send(users);

});
