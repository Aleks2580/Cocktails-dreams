require('dotenv').config();
require('@babel/core');

const path = require('path');
const express = require('express');
const morgan = require('morgan');

const { SESSION_SECRET_SOLO } = process.env;

const PORT = 3000;

const session = require('express-session');

const FileStore = require('session-file-store')(session);


const mainRouter = require('./routes/mainRouter');
const signupRouter = require('./routes/signupRouter');
const loginRouter = require('./routes/loginRouter');
const searchRouter = require('./routes/searchRouter');
const popularRouter = require('./routes/popularRouter');
const savedRouter = require('./routes/savedRouter');
const accountSavedRouter = require('./routes/accountSavedRouter');
const deleteRouter = require('./routes/deleteRouter');
const deleteRecipeRouter = require('./routes/deleteRecipe');
const uploadRouter = require('./routes/uploadRouter');
const myrecipeRouter = require('./routes/myrecipeRouter');
const recipiesRouter = require('./routes/recipiesRouter')


const { sequelize } = require('../db/models');
const { use } = require('./routes/deleteRecipe');

const app = express();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public/')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const sessionConfig = {
  name: 'cocktails',
  store: new FileStore(),
  secret: SESSION_SECRET_SOLO ?? 'soloproject',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 10,
    httpOnly: true,
  },
};

app.use(session(sessionConfig));


app.use('/', mainRouter);
app.use('/signup', signupRouter);
app.use('/login', loginRouter);
app.use('/search', searchRouter);
app.use('/popular', popularRouter);
app.use('/saved', savedRouter);
app.use('/accountsaved', accountSavedRouter);
app.use('/delete', deleteRouter);
app.use('/deleterecipe', deleteRecipeRouter);
app.use('/upload', uploadRouter);
app.use('/myrecipe', myrecipeRouter);
app.use('/recipes', recipiesRouter);


app.get('/logout', (req, res) => {
  if (req.session.newUser) {
    req.session.destroy(() => {
      res.clearCookie('cocktails');
      res.redirect('/');
    });
  } else {
    res.redirect('/login');
  }
});


app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log(`Соединение установленно! ${PORT}`);
  } catch (error) {
    console.log('Error подключения к серверу!', error);
  }
});
