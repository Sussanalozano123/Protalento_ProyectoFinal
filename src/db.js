const mongoose = require('mongoose');

async function connection(){
    await  mongoose   
    .connect(
        'mongodb+srv://sussanalozano123:Luis2019@test1.xtnfk6q.mongodb.net/?retryWrites=true&w=majority'
    )
    .catch(err => console.log(err));
}


module.exports = { connection };