const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;


app.use(cors())
app.use(express.json());

app.get('/', (req, res)=>{
    res.send('wow! i am excited to learn node and an express with nodemon automatic restart ')
})


const users = [
    {id:0 , name: 'sabana', email: 'sabana@gmail.com', phone: '0912823901'},
    {id:1 , name: 'shakira', email: 'shakira@gmail.com', phone: '0912823901'},
    {id:2 , name: 'subosri', email: 'subosri@gmail.com', phone: '0912823901'},
    {id:3 , name: 'sridebi', email: 'sridebi@gmail.com', phone: '0912823901'},
    {id:4 , name: 'srabonti', email: 'srabonti@gmail.com', phone: '0912823901'},
    {id:5 , name: 'sonam', email: 'sonam@gmail.com', phone: '0912823901'},
]

// use query parameter 
app.get('/users', (req, res)=>{
    const search  = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult)
    }else{
        res.send(users)
    }
})


// app.METHOD
app.post('/users', (req, res) =>{
    const newUser =  req.body;
    newUser.id = users.length;
    users.push(newUser);

    console.log('hitting the post' , req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
    
})

// dynamic api 
app.get('/users/:id', (req, res) =>{
    const id = req.params.id; 
    const user = users[id]
    res.send(user) 

    console.log(req.params.id);
})

app.get('/fruits', (req, res) =>{
    res.send(['mango', 'banana', 'lichi', 'apple'])
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('yummy testy tok marka fazli ammm')
})

app.listen(port,  ()=>{
console.log('listening to port', port);
})