const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const port = 2000
//importing the routing
const productsRoute = require('./routes/products')

//here when path-'./products ' route to product route
//setup template engine
app.engine('handlebars',exphbs())
app.set('view engine', 'handlebars')

//body parse middleware
app.use(express.urlencoded({extended:true}))

app.use('/products',productsRoute )
app.get('/',(req,res)=>{
    res.render('./landingpage.handlebars')
})


app.listen(port,()=>{
    console.log('Server started');
})
