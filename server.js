// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/userSchema'); // Note: No need for ".js" extension

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/UserData', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


// app.get('/products.json', (req, res) => {
//   res.sendFile(path.join(__dirname, 'src/components/products.json'));
// });