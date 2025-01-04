import express from 'express';

const app = express();

// app.get('/',(req,res)=>{
//     res.send('Server is ready');
// });

// get a joke of 5 jokes

app.get('/jokes',(req,res)=>{
    const jokes=[
        {
            id:1,
            title:'Joke 1',
            Content:'This is joke 1'
        },
        {
            id:2,
            title:'Joke 2',
            Content:'This is joke 2'
        },
        {
            id:3,
            title:'Joke 3',
            Content:'This is joke 3'
        },
        {
            id:4,
            title:'Joke 4',
            Content:'This is joke 4'
        },
        {
            id:5,
            title:'Joke 5',
            Content:'This is joke 5'
        }

    ];
    res.send(jokes);
});



const port = process.env.PORT || 3000;

app.listen(port , ()=>{
    console.log(`Server at https://localhost:${port}`);
})