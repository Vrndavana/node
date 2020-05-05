const express = require('express'); // import 
const server = express();
const shortid = ('shortid');

// Making your backend server connected to  localhost 5000 using port
const PORT = 5000;
server.listen(PORT, () => console.log(`\n *** APIR RUNNING on hhtp://localhost:${PORT} ***\n`));


// setting up end points 
server.get ('/', (req, res) => { res.status(200).json({api: "API  initialized on 5000."})});
server.get('/api/users', (req, res) => {res.status(200).json({users})});

// Express reading json
server.user(express.json());

let users = [];

server.post('/api/user', (req, res) => {
    const userInfo = req.body    

    userInfo.id = shortid.generate(); 
    users.push(userInfo); 
   
   res.status(201).json({userInfo});
})


server.get('/hobbits', (req, res) => {
    res.send('Welcome to Hobbitown');
});

server.delete("appi/users/:id", (req, res) => {
    let inputId = req.params.id;
    let dataById = data.find(({id})=> id === inputId);  
})

let hobbits = [];   // initialize something you want to build out then do a server.post

server.post('/api/hobbits', (req, res) => {
 const hobbitInfo = req.body    

 hobbitInfo.id = shortid.generate(); 
 users.push(hobbitInfo); 

res.status(201).json({hobbitInfo});
})