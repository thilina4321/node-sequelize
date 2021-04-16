const User = require('../model/User')

exports.createUser = async(req,res)=>{
    
    const {firstName, lastName } = req.body
    try {
        const user = await User.create({firstName, lastName})
        res.status(201).send({user})
        
    } catch (error) {
        res.status(500).send({error:error.message || 'Something went wrong'})
    }

} 

exports.findAllUsers = async(req,res)=>{
    

    try {
        const user = await User.findAll({attributes:['firstName']})
        res.status(200).send({user})
    } catch (error) {
        res.status(500).send({msg:error.message || 'error'})
    }
}

exports.updateUser = async(req,res)=>{
    const {firstName} = req.body 

    try {
        const user = await User.update({firstName}, {where:{id:1}})
        console.log(user);
        res.status(200).send({user})
    } catch (error) {
        res.status(500).send({msg:error.message || 'error'})
    }
}

exports.deleteUser = async(req,res)=>{
    try {
        const user = await User.destroy({where:{id:1}})
        res.status(200).send({user})
    } catch (error) {
        res.status(500).send({error:error.message || 'something went wrong'})
    }
}