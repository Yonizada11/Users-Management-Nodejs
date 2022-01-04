# User Management System - with Node.js, HBS, MySQL

## Installation
To run this project, install it locally using npm:


$ npm i
$ npm start
`

create a database named `users_management`, and run the following SQL query:

CREATE TABLE users_management.users ( id INT NOT NULL AUTO_INCREMENT , first_name VARCHAR(50) NOT NULL, last_name VARCHAR(50) NOT NULL, email VARCHAR(50) NOT NULL, phone VARCHAR(30) NOT NULL, comments TEXT NOT NULL, PRIMARY KEY (id)) ENGINE = InnoDB;

To add records to the DB run the following SQL query: 
INSERT INTO users 
(id, first_name, last_name, email, phone, comments) VALUES
(NULL, 'Adam', 'James', 'adamjames@gmail.com','0501234567', ''),
(NULL, 'Lin', 'Choen', 'linchoen@gmail.com', '0501234568', ''),
(NULL, 'Yoni', 'Moshe', 'yonimoshe@gmail.com', '0501234569', ''),
(NULL, 'Liat', 'Israel', 'liatisrael@gmail.com', '0501234578', ''),
(NULL, 'Israel', 'Levi', 'israellevi@gmail.com', '0501244568', ''),
(NULL, 'Jhon', 'Dohan', 'jhondohan@gmail.com', '0501264568', ''),
(NULL, 'Rachel', 'Green ', 'rachelgreen@gmail.com', '0501234068', ''),
(NULL, 'Ross', 'Geller ', 'rossgeller@gmail.com', '0501834568', '')