const mysql = require('mysql');

let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

// View all users
exports.viewUsers = (req, res) => {
  connection.query('SELECT * FROM users', (err, rows) => {
    if (!err) {
      let removedUser = req.query.removed;
      res.render('main', { rows, removedUser });
    } else {
      console.log(err);
    }
    console.log('Data got from users table: \n', rows);
  });
}

// Find a user by search
exports.findUsers = (req, res) => {
  let searchVal = req.body.search;
  connection.query('SELECT * FROM users WHERE first_name LIKE ? OR last_name LIKE ? OR email LIKE ?',
    ['%' + searchVal + '%', '%' + searchVal + '%', '%' + searchVal + '%'], (err, rows) => {
      if (!err) {
        res.render('main', { rows });
      } else {
        console.log(err);
      }
      console.log('Data got from users table: \n', rows);
    });
}

exports.usersForm = (req, res) => {
  res.render('new_user');
}

// Add a new users
exports.createNewUser = (req, res) => {
  const { first_name, last_name, email, phone, comments } = req.body;
  connection.query('INSERT INTO users SET first_name = ?, last_name = ?, phone = ?, email = ?, comments = ?',
    [first_name, last_name, phone, email, comments], (err, rows) => {
      if (!err) {
        res.render('new_user', { alert: 'User was added successfully.' });
      } else {
        console.log(err);
      }
      console.log('Data got from users table: \n', rows);
    });
}

// Update a user
exports.updateUser = (req, res) => {
  const { first_name, last_name, email, phone, comments } = req.body;
  connection.query('UPDATE users SET email = ?, first_name = ?, last_name = ?, phone = ?, comments = ? WHERE id = ?',
    [email, first_name, last_name, phone, comments, req.params.id], (err, rows) => {
      if (!err) {
        connection.query('SELECT * FROM users WHERE id = ?', [req.params.id], (err, rows) => {
          if (!err) {
            res.render('update_user', { rows, alert: `${first_name} has been updated.` });
          } else {
            console.log(err);
          }
          console.log('Data got from users table: \n', rows);
        });
      } else {
        console.log(err);
      }
      console.log('Data got from users table: \n', rows);
    });
}

// Edit a user
exports.editUser = (req, res) => {
  connection.query('SELECT * FROM users WHERE id = ?', [req.params.id], (err, rows) => {
    if (!err) {
      res.render('update_user', { rows });
    } else {
      console.log(err);
    }
    console.log('Data got from users table: \n', rows);
  });
}

// Delete a user
exports.deleteUser = (req, res) => {
  connection.query('DELETE FROM users WHERE id = ?', [req.params.id], (err, rows) => {
    if (!err) {
      res.redirect('/');
    } else {
      console.log(err);
    }
    console.log('Data got from users table: \n', rows);
  });
}

// View all users
exports.viewall = (req, res) => {
  connection.query('SELECT * FROM users WHERE id = ?', [req.params.id], (err, rows) => {
    if (!err) {
      res.render('view_user', { rows });
    } else {
      console.log(err);
    }
    console.log('Data got from users table: \n', rows);
  });

}