const express=require('express')
const app=express();
const port=3200;
require('./db')

app.use('/api/auth',require('./routes/auth'))

app.get("/",(req,res)=>{
    res.send('<h1>Hello</h1>')
})

app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
});
