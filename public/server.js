

const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');
const { Server } = require('http');

const users = [];
const app = express();

app.use(express.urlencoded({ extended: false })) //tells the application to take the login forms and be able to access them in our request variables inside the post method
app.use(express.static(path.join(__dirname + './public')));
const port = process.env.port || 7000;
// app.use(express.static('public'));

// API space (coming)


// request(url, (err, res, body) => {
//   if (err) {
//     console.log("err", err);
//   } else {
//     console.log("body", body)
//   }
// })


////// LOGIN /////

app.get('/', (req, res) => {
  res.sendFile('/index.html', { root: __dirname })
});

app.get('/login', (req, res) => {
  res.sendFile('/login.html', { root: __dirname })
});

app.get('/register', (req, res) => {
  res.sendFile('/register.html', { root: __dirname })
});

app.get('/about', (req, res) => {
  res.sendFile('/about.html', { root: __dirname })
});


app.post('/login', (req, res) => {

  // const username = req.body.username;
  const password = req.body.password;
  if (users.username !== req.body.username) {
    res.redirect('/login');
  } else if (users.password !== password) {
    res.redirect('/login')
  } else {
    res.redirect('/')
  }
})

app.post('/register', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: hashedPassword
    })
    res.redirect('/login')
  } catch {
    res.redirect('/register.html', { root: __dirname })
  }
  console.log(users);
})

app.listen(port)