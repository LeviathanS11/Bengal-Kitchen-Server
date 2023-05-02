const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

const chefs=require('./data/chefs.json')
const chefDetails=require('./data/chefsDetails.json')

app.use(cors())

app.get('/chefs',(req,res)=>{
    res.send(chefs)
})
app.get('/chefs/:id',(req,res)=>{
    const id=req.params.id;
    const details=chefDetails.filter(n=>n.id === id);
    res.send(details)
})

app.get('/',(req,res)=>{
    res.send('server running')
});
app.listen(port, () => {
    console.log(`Dragon is api is running on port:${port}`)
})