var mdb= require('mongoose')

var formSchema = mdb.Schema({
    email:String,
    password:String,
    phoneNumber:String
})

var form_schema = mdb.model("forms",formSchema)
module.exports = form_schema