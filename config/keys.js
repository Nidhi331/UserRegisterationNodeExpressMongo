const mongoose = require('mongoose');
const URI = 'mongodb+srv://nidhi1503:Papamumma%40331@cluster0.xjuht.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const connectDB = async()=>{
    await mongoose.connect(URI);
    console.log('db connected')
}

module.exports = connectDB ;
