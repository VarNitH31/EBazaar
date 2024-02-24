// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/userSchema'); // Note: No need for ".js" extension
const Contact = require('./models/contactSchema');


const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/UserData', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Sign up route

app.post('/api/contact',async (req,res)=>{
 try{
  const{fullName,email,message}=req.body;

  const newContact=new Contact({
    fullName,
    email,
    message,
  });
  await newContact.save();
  console.log("Message sent successfully");
  res.status(201).json({ message: 'User registered successfully' });
 }catch(error){
  console.error('Error sending message:', error);
  res.status(500).json({ error: 'Internal Server Error' });
 }


});



app.post('/api/signup', async (req, res) => {
  try {
    const { userName, email, password } = req.body;

    const newUser = new User({
      userName,
      email,
      password,
    });

    await newUser.save();
    console.log('User registered successfully');
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Login route
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    // Find user by email
    console.log(req.body);
    const user = await User.findOne({ email });
    
    if (!user) {
      console.log("user is not found");
      return res.json({  value:0 ,  error: 'User not found' });
    }
    // Check if password matches
    if (user.password !== password) {
      console.log("password is not matched")
      return res.json({ value:0,  error: 'Invalid password' });
    }

    // If email and password are correct, return success message
    res.json({ value:1,   message: 'Login successful' });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
