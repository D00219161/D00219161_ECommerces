-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 11, 2019 at 12:31 AM
-- Server version: 10.1.26-MariaDB
-- PHP Version: 7.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `roisin_products`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_swedish_ci NOT NULL,
  `price` float(6,2) NOT NULL,
  `description` text CHARACTER SET utf8 COLLATE utf8_swedish_ci NOT NULL,
  `image_href` varchar(255) CHARACTER SET utf8 COLLATE utf8_swedish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `description`, `image_href`) VALUES
(1, 'The Google Home', 100.00, 'Get real-time answers to questions with Google. Play & control music from streaming services with integrated speaker. Find information hands-free using Google Assistant. Control your smart home products using your voice.', 'https://brain-images-ssl.cdn.dixons.com/1/4/10161441/u_10161441.jpg'),
(2, 'Apple AirPods with Charging Case', 179.00, 'Wireless and easy to use. Up to 5 hours of listening time (on one charge). More than 24 hours of listening time (with Charging Case). \r\n', 'https://johnlewis.scene7.com/is/image/JohnLewis/238086341?$rsp-pdp-port-1440$'),
(3, 'Xbox One S Star Wars Jedi: Fallen Order™ Bundle (1TB)', 199.00, 'Whats in the box: Xbox One S 1TB console, Star Wars Jedi: Fallen Order™ Deluxe Edition, 1-month of EA Access, 1-month trial of Xbox Game Pass for console and Xbox Live Gold. \r\n', 'https://compass-ssl.xbox.com/assets/f9/a7/f9a70007-9dc5-4dff-8327-dca26d346821.jpg?n=X1S-113654_Hero-Image-0_1920x777_03.jpg'),
(4, 'SONY PlayStation 4 500 GB White', 299.99, '500 GB hard drive and 8 GB GDDR5 memory. Blu-ray drive. Built-in WiFi and Ethernet and Bluetooth. Redesigned chassis for slim design.', 'https://www.beatsbydre.com/content/dam/beats/web/product/headphones/solo-pro/global/ecom/product-tiles/sp-global-producttilev2-red.png.large.1x.png'),
(5, 'Beats Solo Pro', 299.95, 'Featuring Active Noise Cancelling, which gives you the space to create with fully immersive sound. Unfold the headphones to power them on and enjoy up to 22 hours of listening time (up to 40 with Noise Cancelling and Transparency off1). Fold them to turn off. When you need a little extra juice, 10 minute Fast Fuel charging gives 3 hours of playback when the battery is low. With hands-free controls via “Hey Siri” on iOS devices2, and voice capability with the push of the “b” button on a variety of compatible devices, you can keep the creativity going.', 'https://www.beatsbydre.com/content/dam/beats/web/product/headphones/solo-pro/global/ecom/product-tiles/sp-global-producttilev2-black.png.large.1x.png'),
(6, 'Fitbit Versa 2', 199.95, 'Elevate your day with Fitbit Versa 2—the health & fitness smartwatch with Amazon Alexa Built-in, 24/7 heart rate tracking, Sleep Score, apps and more, all in a premium design. Special Edition Versa 2 includes a 3-month trial of Fitbit Premium.', 'https://marketing.fitbit.com/images/product-listing/desktop/versa2-bordeaux-copper-rose-0-3cb85458ea7b6e69e9a09168e9775c61.png');
--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
