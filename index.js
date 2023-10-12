import express from 'express';
import routes from './src/routes/crmRoutes';
import mongoose, { mongo } from 'mongoose';
import bodyParser from 'body-parser';


// app variable
const app = express();
const PORT = 3000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://0.0.0.0/CRMdb',{
    useNewUrlParser:true
});

// body parser set up 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// serving static files
app.use(express.static('public'));

// passing app in routes
routes(app);

// end points
app.get('/',(req, res) => 
    res.send(`Node and express server is running on  ${PORT}`)
);

// message for starting server
app.listen(PORT, ()=>
    console.log(`Server is running on port ${PORT}.`)
);
