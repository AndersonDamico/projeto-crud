const mongoose = require ('mongoose')

const schema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password:String,
  })
  
  //MVC model view controller
  const Model = mongoose.model('customers', schema)