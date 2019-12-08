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
(4, 'SONY PlayStation 4 - 500 GB, White', 299.99, '500 GB hard drive & 8 GB GDDR5 memory. Blu-ray drive. Built-in WiFi & Ethernet & Bluetooth. Redesigned chassis for slim design.', 'https://brain-images-ssl.cdn.dixons.com/1/0/10159101/u_10159101.jpg'),
(5, 'Beats Solo Pro', 299.95, 'Featuring Active Noise Cancelling, which gives you the space to create with fully immersive sound. Unfold the headphones to power them on and enjoy up to 22 hours of listening time (up to 40 with Noise Cancelling and Transparency off1). Fold them to turn off. When you need a little extra juice, 10 minute Fast Fuel charging gives 3 hours of playback when the battery is low. With hands-free controls via “Hey Siri” on iOS devices2, and voice capability with the push of the “b” button on a variety of compatible devices, you can keep the creativity going.', 'https://www.beatsbydre.com/content/dam/beats/web/product/headphones/solo-pro/global/ecom/product-tiles/sp-global-producttilev2-black.png.large.1x.png'),
(6, 'Fitbit Versa 2', 199.95, 'Elevate your day with Fitbit Versa 2—the health & fitness smartwatch with Amazon Alexa Built-in, 24/7 heart rate tracking, Sleep Score, apps and more, all in a premium design. Special Edition Versa 2 includes a 3-month trial of Fitbit Premium.', 'https://marketing.fitbit.com/images/product-listing/desktop/versa2-bordeaux-copper-rose-0-3cb85458ea7b6e69e9a09168e9775c61.png'),
(7, 'Nintendo Switch Neon with Mario Kart 8 Deluxe - Limited Edition Bundle', €349.99, 'With Nintendo Switch, the whole family can enjoy gaming together at home—then switch to handheld mode to play anytime, anywhere!, Contents: Nintendo Switch Console (MOD. HAC-001-01), 2 Joy-Con controllers, Nintendo Switch dock, Joy-Con grip, AC adapter, HDMI cable and Joy-Con straps, Mario Kart Game, Joy-Con Capture Button to take instant screenshots of gameplay, Joy-Con NFC touchpoint for interaction with amiibo, Each Joy-Con has an accelerometer and motion sensor for independent motion control, Touch screen capabilities for compatible games, Battery life can last for approximately 4.5-9 hours.', 'https://image.smythstoys.com/original/desktop/185241.jpg'),
(8, 'SAMSUNG QE55Q67RATXXU 55" Smart 4K Ultra HD HDR QLED TV with Bixby', 899.00, 'Cinematic picture with 100% colour volume, Intelligent upscaling with Quantum Processor 4K, Picture quality: 3100 PQI, HDR: HDR10+ / Hybrid Log-Gamma (HLG), Catch-up TV & 4K streaming. Comes in three sizes: 49 inch, 55 inch and 65 inch!', 'https://brain-images-ssl.cdn.dixons.com/5/4/10191545/u_10191545.jpg'),
(9, 'Tom Clancys The Division 2', 20.00, 'The second edition to the first Tom Clancys The Division. Seven months have passed since a deadly virus hit New York City and the rest of the world, crippling the population. When the virus hit, The Division, a unit of civilian sleeper agents, was activated as the last line of defense. Since then, Division agents have been fighting relentlessly to save what remains. Available for both Xbox One and Playstation 4.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTrTQGFGuT6XaP12YKcL_7AREVbbeZ5QoKQQma0SQnuyMovabes'),
(10, 'The Mavic Mini', 399.00, 'The compact yet powerful Mavic Mini is the perfect creative companion, capturing your moments in a way that effortlessly elevates the ordinary. Together with the easy-to-use DJI Fly app, you’ll enjoy a simplified flying experience and a perspective unlike any other. Weighing under 250 grams, Mavic Mini is almost as light as the average smartphone.', 'https://images-na.ssl-images-amazon.com/images/I/71JJgCAQKSL._SX679_.jpg');
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
