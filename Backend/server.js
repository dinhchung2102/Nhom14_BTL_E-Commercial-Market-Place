const express = require('express');


const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors')

const productRoutes = require('./routes/productRoutes')
const categoryRoutes = require('./routes/categoryRoutes')
 
dotenv.config();
const app = express();

connectDB();

app.use(cors())
app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`);
    
})