-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 22, 2022 at 11:29 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `final_project`
--

-- --------------------------------------------------------

--
-- Table structure for table `person`
--

CREATE TABLE `person` (
  `user` varchar(255) NOT NULL,
  `pass` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `person`
--

INSERT INTO `person` (`user`, `pass`) VALUES
('admin', 'test');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `pid` int(50) NOT NULL,
  `title` varchar(126) NOT NULL,
  `image` varchar(255) NOT NULL,
  `price` int(50) NOT NULL,
  `category` varchar(126) NOT NULL,
  `description` varchar(126) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`pid`, `title`, `image`, `price`, `category`, `description`) VALUES
(1, 'Shirt 1', 'product_images/ugashirt1.jpg', 6, 'shirt', 'The comfiest UGA shirt you can buy');

INSERT INTO `products` (`pid`, `title`, `image`, `price`, `category`, `description`) VALUES
(2, 'Shirt 2', 'product_images/ugarainjacket.jpg', 25, 'shirt', 'White UGA Logo rain jacket');

INSERT INTO `products` (`pid`, `title`, `image`, `price`, `category`, `description`) VALUES
(3, 'Shirt 3', 'product_images/ugatshirt.jpg', 9, 'shirt', 'black UGA athletic T-shirt');

INSERT INTO `products` (`pid`, `title`, `image`, `price`, `category`, `description`) VALUES
(4, 'Hat 1', 'product_images/ugahat1.jpg', 8, 'hat', 'Red UGA Nike hat');

INSERT INTO `products` (`pid`, `title`, `image`, `price`, `category`, `description`) VALUES
(5, 'Hat 2', 'product_images/ugahat2.jpg', 10, 'hat', 'Vintage stylized UGA hat red');

INSERT INTO `products` (`pid`, `title`, `image`, `price`, `category`, `description`) VALUES
(6, 'Hat 3', 'product_images/ugahat3.jpg', 10, 'hat', 'Vintage stylized UGA hat gray');

INSERT INTO `products` (`pid`, `title`, `image`, `price`, `category`, `description`) VALUES
(7, 'Hat 4', 'product_images/ugahat4.jpg', 8, 'hat', 'Red UGA baseball hat');

INSERT INTO `products` (`pid`, `title`, `image`, `price`, `category`, `description`) VALUES
(8, 'Hat 5', 'product_images/ugacap.jpg', 9, 'hat', 'All black cap with an embroidered UGA Logo');

INSERT INTO `products` (`pid`, `title`, `image`, `price`, `category`, `description`) VALUES
(9, 'Jersey 1', 'product_images/ugajersey1.jpg', 30, 'jersey', 'Red and black UGA jersey');

INSERT INTO `products` (`pid`, `title`, `image`, `price`, `category`, `description`) VALUES
(10, 'Jersey 2', 'product_images/ugajersey2.jpg', 30, 'jersey', 'White and black UGA jersey');

INSERT INTO `products` (`pid`, `title`, `image`, `price`, `category`, `description`) VALUES
(11, 'Jersey 3', 'product_images/ugajersey3.jpg', 25, 'jersey', 'Red Classic UGA jersey');

INSERT INTO `products` (`pid`, `title`, `image`, `price`, `category`, `description`) VALUES
(12, 'Jersey 4', 'product_images/ugajersey4.jpg', 35, 'jersey', 'Black and red player Jersey');

INSERT INTO `products` (`pid`, `title`, `image`, `price`, `category`, `description`) VALUES
(13, 'Pants 1', 'product_images/ugapants1.jpg', 10, 'pants', 'Red UGA athletic shorts');

INSERT INTO `products` (`pid`, `title`, `image`, `price`, `category`, `description`) VALUES
(14, 'Pants 2', 'product_images/ugapants2.jpg', 10, 'pants', 'Black UGA athletic shorts');

INSERT INTO `products` (`pid`, `title`, `image`, `price`, `category`, `description`) VALUES
(15, 'Pants 3', 'product_images/ugapants3.jpg', 15, 'pants', 'Black UGA Sweatpants');

INSERT INTO `products` (`pid`, `title`, `image`, `price`, `category`, `description`) VALUES
(16, 'Pants 4', 'product_images/ugapants4.jpg', 15, 'pants', 'Gray UGA Sweatpants');

INSERT INTO `products` (`pid`, `title`, `image`, `price`, `category`, `description`) VALUES
(17, 'Pants 5', 'product_images/ugashorts.jpg', 12, 'pants', 'Dark gray UGA basketball shorts');



--
-- Indexes for dumped tables
--

--
-- Indexes for table `person`
--
ALTER TABLE `person`
  ADD PRIMARY KEY (`user`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`pid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `pid` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;