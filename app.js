const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const sequelize = require('./util/db')
const User = require('./model/User')
const Product = require('./model/Product')

//  routers
const userRouter = require('./router/user')
const productRouter = require('./router/product')

app.use(express.json())
app.use('/user', userRouter)
app.use('/product', productRouter)

Product.belongsTo(User, {constraints:true, onDelete:'CASCADE'})
User.hasMany(Product)

sequelize.sync({force:true}).then(()=>{    
    app.listen(port, ()=>{
        console.log('server is runs on port ', port);
    })
}).catch(e=>{
    console.log(e.message);
})
