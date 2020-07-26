const mongoose = require('mongoose');

const uri = 'mongodb+srv://fahimahmed38:fahim12345@clusterstudentcouncil.bvdc3.mongodb.net/maindb?retryWrites=true&w=majority';

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('MongoDB Connected…')
})
.catch(err => console.log(err))