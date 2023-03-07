-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Mar 07, 2023 at 02:59 PM
-- Server version: 8.0.21
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `employment_management_system`
--

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

DROP TABLE IF EXISTS `employees`;
CREATE TABLE IF NOT EXISTS `employees` (
  `emp_id` int NOT NULL AUTO_INCREMENT,
  `full_name` varchar(255) NOT NULL,
  `name_initial` varchar(255) NOT NULL,
  `display_name` varchar(255) NOT NULL,
  `gender_id` int NOT NULL,
  `date_of_birth` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `mobile_no` int NOT NULL,
  `designation` varchar(255) NOT NULL,
  `emp_type` int NOT NULL,
  `join_date` varchar(255) NOT NULL,
  `experience` int NOT NULL,
  `salary` int NOT NULL,
  `personal_notes` varchar(255) NOT NULL,
  PRIMARY KEY (`emp_id`),
  KEY `foriegn_key1` (`gender_id`),
  KEY `foriegn_key2` (`emp_type`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`emp_id`, `full_name`, `name_initial`, `display_name`, `gender_id`, `date_of_birth`, `email`, `mobile_no`, `designation`, `emp_type`, `join_date`, `experience`, `salary`, `personal_notes`) VALUES
(10, 'Faseer Ahmed', 'F. Ahmed', 'Faseer', 1, '2019-01-01', 'faseer@test.com', 778941242, 'Tech Lead', 2, '2022-10-06', 3, 200000, 'Strong Analytical Skills'),
(11, 'Mohamed Fawas', 'M.Fawas', 'Fawas', 1, '2019-10-01', 'fawas@test.com', 778941242, 'Software Engineer', 2, '2022-10-06', 2, 150000, 'Strong Analytical Skills'),
(12, 'Alex Martin John', 'A.M. John', 'John', 1, '2000-01-06', 'john@test.com', 714578965, 'Software Engineer', 1, '2022-05-30', 2, 100000, 'Strong Team Player'),
(13, 'Manasi Goerge', 'M.George', 'Manasi', 2, '2000-10-01', 'manasi@test.com', 778941242, 'Software Engineer', 2, '2020-10-06', 2, 150000, 'Strong Analytical Skills'),
(14, 'David Villa', 'D.Villa', 'Villa', 1, '2000-05-01', 'villa@test.com', 778941245, 'Senior Software Engineer', 1, '2019-10-06', 3, 150000, 'Strong Team Player'),
(15, 'Kasun Silva', 'K.Silva', 'Kasun', 1, '1998-03-01', 'kasun@test.com', 778920245, 'Software Engineer', 3, '2019-05-06', 1, 100000, 'Strong Team Player'),
(16, 'Alex Root', 'A.Root', 'Alex', 1, '1990-05-05', 'alex@test.com', 778920545, 'Software Architectr', 1, '2016-05-06', 8, 300000, 'Strong Team Player'),
(17, 'Martin Philips', 'M. Philips', 'Philips', 1, '2023-02-26', 'philips@test.com', 714578460, 'Software Engineer', 4, '2023-02-26', 2, 100000, 'Top coding Skills and analytical skills');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `employees`
--
ALTER TABLE `employees`
  ADD CONSTRAINT `foriegn_key1` FOREIGN KEY (`gender_id`) REFERENCES `gender_type` (`gen_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `foriegn_key2` FOREIGN KEY (`emp_type`) REFERENCES `employee_types` (`emp_type_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
