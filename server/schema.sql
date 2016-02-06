-- CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(20),
  message VARCHAR(147),
  roomname VARCHAR(20)
  -- PRIMARY KEY (`id`)
);

CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(20)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

