require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user.routes');
const chatRoutes = require('./routes/chat.routes');

const app = express();
const PORT=process.env.PORT||2000
connectDB()

app.use(cors(corsOptions))
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/chat', chatRoutes);

mongoose.connection.once('open',()=>{
    console.log('Connected to MongoDB')
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})

mongoose.connection.on('error', err => {
    console.log(err)
})

