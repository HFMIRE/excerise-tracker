const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require("dotenv");
const exercisesRouter = require('./routes/exercises')
const usersRouter = require('./routes/users')

dotenv.config();

const app = express(); 
const port =  process.env.PORT || 5000;

app.use(express.json())
app.use(cors()); 

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true , useUnifiedTopology: true}
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

app.use('/exercises', exercisesRouter)
app.use("/users", usersRouter)

app.listen(port, () => {
  console.log(`Server is running on port: http://localhost:${port}`);
});