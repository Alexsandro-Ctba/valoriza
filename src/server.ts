import express, { request } from 'express';
const app = express();

app.get("/test", (request, response)=>{
    return response.send('Ola project');
})

app.post("/post", (request, response)=>{
    return response.send('Ola post!')
})

app.listen(3000, ()=>{
    console.log('Server is running')
})

