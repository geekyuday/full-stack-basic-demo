import express from 'express';
const app = express();

app.get('/',(req,res)=>{
    res.send('Server is ready')
});

// get a list of 5 jokes

app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
            id : 1,
            title: 'A joke',
            content: 'This is a joke'
        },

        {
            id : 2,
            title: 'Another joke',
            content: 'This is another joke'
        },

        {
            id : 3,
            title: 'A3 joke',
            content: 'This is a3 joke'
        },

        {
            id : 4,
            title: 'A4 joke',
            content: 'This is a4 joke'
        },

        {
            id : 5,
            title: 'A5 joke',
            content: 'This is a5 joke'
        }
    ]
    res.send(jokes);
})

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Server is at https://localhost:${port}`);
})