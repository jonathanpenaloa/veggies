const mongoose = require('mongoose');

mongoose.connect(process.env.MONGOURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});