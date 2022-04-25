-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 25, 2022 at 05:50 PM
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
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `oid` int(50) NOT NULL,
  `quantity` int(50) NOT NULL,
  `productid` int(50) NOT NULL,
  `userid` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
(1, 'Shirt 1', 'product_images/ugashirt1.jpg', 6, 'shirt', 'The comfiest UGA shirt you can buy'),
(2, 'Shirt 2', 'product_images/ugarainjacket.jpg', 25, 'shirt', 'White UGA Logo rain jacket'),
(3, 'Shirt 3', 'product_images/ugatshirt.jpg', 9, 'shirt', 'black UGA athletic T-shirt'),
(4, 'Hat 1', 'product_images/ugahat1.jpg', 8, 'hat', 'Red UGA Nike hat'),
(5, 'Hat 2', 'product_images/ugahat2.jpg', 10, 'hat', 'Vintage stylized UGA hat red'),
(6, 'Hat 3', 'product_images/ugahat3.jpg', 10, 'hat', 'Vintage stylized UGA hat gray'),
(7, 'Hat 4', 'product_images/ugahat4.jpg', 8, 'hat', 'Red UGA baseball hat'),
(8, 'Hat 5', 'product_images/ugacap.jpg', 9, 'hat', 'All black cap with an embroidered UGA Logo'),
(9, 'Jersey 1', 'product_images/ugajersey1.jpg', 30, 'jersey', 'Red and black UGA jersey'),
(10, 'Jersey 2', 'product_images/ugajersey2.jpg', 30, 'jersey', 'White and black UGA jersey'),
(11, 'Jersey 3', 'product_images/ugajersey3.jpg', 25, 'jersey', 'Red Classic UGA jersey'),
(12, 'Jersey 4', 'product_images/ugajersey4.jpg', 35, 'jersey', 'Black and red player Jersey'),
(13, 'Pants 1', 'product_images/ugapants1.jpg', 10, 'pants', 'Red UGA athletic shorts'),
(14, 'Pants 2', 'product_images/ugapants2.jpg', 10, 'pants', 'Black UGA athletic shorts'),
(15, 'Pants 3', 'product_images/ugapants3.jpg', 15, 'pants', 'Black UGA Sweatpants'),
(16, 'Pants 4', 'product_images/ugapants4.jpg', 15, 'pants', 'Gray UGA Sweatpants'),
(17, 'Pants 5', 'product_images/ugashorts.jpg', 12, 'pants', 'Dark gray UGA basketball shorts');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userid` int(50) NOT NULL,
  `user` varchar(126) NOT NULL,
  `pass` varchar(126) NOT NULL,
  `orderid` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`oid`),
  ADD KEY `user_FK` (`userid`),
  ADD KEY `product_FK` (`productid`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`pid`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userid`),
  ADD KEY `order_FK` (`orderid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `oid` int(50) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `pid` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userid` int(50) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `product_FK` FOREIGN KEY (`productid`) REFERENCES `products` (`pid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_FK` FOREIGN KEY (`userid`) REFERENCES `users` (`userid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `order_FK` FOREIGN KEY (`orderid`) REFERENCES `orders` (`oid`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
