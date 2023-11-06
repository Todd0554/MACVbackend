import dotenv from 'dotenv'
import colors from 'colors'
// mongoose model frame
import User from './models/userModel.js'

import users from './data/users.js'
// mongoDB Atlas connection
import connectDB from './config/db.js'

dotenv.config()
connectDB()

// import sample data
const importData = async () => {
    try {
        // clear the data in database
        await User.deleteMany()
        // insert the example users
        await User.insertMany(users)
        
        console.log('successfully adding example data of users'.yellow.inverse)
        process.exit()
    } catch (error) {
        console.log(`${error.message}`.red.bold.inverse)
        process.exit(1)
    }
}

// delete all the data
const destroyData = async () => {
    try {
        // clear the data in database
        await User.deleteMany()
        
        console.log('successfully destroying example data of users'.yellow.inverse)
        process.exit()
    } catch (error) {
        console.log(`${error.message}`.red.bold.inverse)
        process.exit(1)
    }
}

// option of different script (for more script, please go to package.json in root path)
process.argv[2] === '-d' ? destroyData() : importData()
