const express = require('express')
const app =express()
app.use(express.json());
const mongoose = require('mongoose')



// Connexion à MongoDB

mongoose.connect('mongodb://localhost:27017/book', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Database connected'))
  .catch((error) => console.error('Database connection error:', error));

// Définir le PORT 
PORT=3000




// Routes
const bookRouter = require('./routes/book.router');
app.use('/books', bookRouter);

// Lancer le serveur
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });