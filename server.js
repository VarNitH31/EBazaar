// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/userSchema'); // Note: No need for ".js" extension
const Contact = require('./models/contactSchema');
const Address=require('./models/addressSchema');


const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://varnith:Varnith%40123@ecommerce.0hrtfgs.mongodb.net/?retryWrites=true&w=majority&appName=Ecommerce/UserData', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Sign up route

app.post('/api/address', async (req,res)=>{
  
  try {
    const{fullName,city,address,zipCode,cart}=req.body;

    const newAddress= new Address({
      fullName,
      city,
      address,
      zipCode,
      cart
    });

    await newAddress.save();
    console.log("Address registered");
    res.status(201).json({ message: 'Address registered successfully' });

  } catch (error) {
    console.error('Error saving address:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})




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
    
    console.log(req.body);
    const user = await User.findOne({ email });
    
    if (!user) {
      console.log("user is not found");
      return res.json({  value:0 ,  error: 'User not found' });
    }
   
    if (user.password !== password) {
      console.log("password is not matched")
      return res.json({ value:0,  error: 'Invalid password' });
    }

    res.json({ value:1,   message: 'Login successful' });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
