import connectDB from './config/db.js';
connectDB();

import app from './app.js';

const PORT = process.env.PORT || 1010
const HOST = '0.0.0.0'

app.listen(
    PORT, 
    HOST,
    console.log(`   
    Welcome to backend of MACV!!!
    Server is running in ${process.env.NODE_ENV} 
    HOST: ${HOST}
    PORT: ${PORT}...
    `.blue.bold)
)