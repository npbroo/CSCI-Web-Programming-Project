-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 10, 2021 at 05:01 AM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Database: `final_project`
--

-- --------------------------------------------------------

--
-- Table structure for table `person`
--

CREATE TABLE person (
  user      VARCHAR(255)   NOT NULL,
  pass      VARCHAR(255)   NOT NULL,
  PRIMARY KEY (user)
);

--
-- Dumping data for table `user`
--

INSERT INTO `person` (`user`, `pass`) VALUES ('admin', 'password');
