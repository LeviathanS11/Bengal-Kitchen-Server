const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

const chefs=require('./data/chefs.json')

app.use(cors())

app.get('/chefs',(req,res)=>{
    res.send(chefs)
})

app.get('/',(req,res)=>{
    res.send('server running')
});
app.listen(port, () => {
    console.log(`Dragon is api is running on port:${port}`)
})