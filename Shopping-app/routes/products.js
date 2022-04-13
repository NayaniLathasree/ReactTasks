const express = require('express')
const router = express.Router()
const products =[{
    _id:1,
    pName : 'Bag',
    pDesc:' wearable',
    pPrice:1200
}]
router.get('/products',(req,res)=>{
    res.render('./products.handlebars' ,{products})
})
router.get('/add-product',(req,res)=>{
    res.render('./add-product.handlebars')
})
router.post('/add-product',(req,res)=>{
    // res.render('./add-product.handlebars')
    let {_id,pName,pDesc,pPrice} = req.body
    console.log(req.body);
    _id = parseInt(_id)
     pPrice = parseInt(pPrice)
    products.push({_id,
        pName,
        pDesc,
        pPrice
    })
    res.redirect('/products/products')
    // res.send('Product added Successfully')
})
router.get('/edit-products/:_id' , (req , res)=>{
    console.log(req.query._id);
    console.log(req.params._id);
   const index= products.findIndex((product)=>{
        return parseInt(product._id) === parseInt(req.params._id)
    })
    const selectedProduct = products[index]
  res.render('./edit-Product.handlebars',{selectedProduct})

})
router.post('/edit-product' , (req , res)=>{
    console.log(req.body);
    let {_id,pName,pDesc,pPrice} = req.body
    _id = parseInt(_id)
     pPrice = parseInt(pPrice)
     const index= products.findIndex((product)=>{
        return parseInt(product._id) === parseInt(req.params._id)
    })
    products.splice(index,1,{_id,pName,pDesc,pPrice})
    res.redirect('/products/products')
})
router.get('/delete-products/:_id' , (req , res)=>{
    const _id = req.params._id
    const index= products.findIndex((product)=>{
        return parseInt(product._id) === parseInt(_id)
    })
    products.splice(index,1)
    res.redirect('/products/products')
})

module.exports = router


