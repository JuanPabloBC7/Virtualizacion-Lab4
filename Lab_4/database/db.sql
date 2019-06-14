-- creating the database
CREATE DATABASE jpbalan;

-- using the database
USE jpbalan;

-- creating a table
CREATE TABLE Pelicula(
    ID_Peli INT(5) NOT NULL AUTO_INCREMENT,
    Nombre VARCHAR(50) NOT NULL,
    Genero VARCHAR(50) NOT NULL,
    CONSTRAINT PeliculaPK PRIMARY KEY (ID_Peli)
)ENGINE INNODB;

-- tp show all tables
SHOW TABLES;

-- to describe 
DESCRIBE CUSTOMER;