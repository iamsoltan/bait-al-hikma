const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://FirstClusterUser:1234567887654321@firstcluster.s6ozl.mongodb.net/books?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("connected to mongo atlas db ..."))
    .catch(err => console.error("unable to connect to mongo db ", err));

const bookSchema = new mongoose.Schema({
    title: String,
    priority: String
})

//Devbooks --> collection : table
module.exports = mongoose.model("devbooks", bookSchema);