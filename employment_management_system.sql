-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Mar 07, 2023 at 09:42 AM
-- Server version: 5.7.36
-- PHP Version: 7.4.26

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
  `emp_id` int(11) NOT NULL AUTO_INCREMENT,
  `full_name` varchar(255) NOT NULL,
  `name_initial` varchar(255) NOT NULL,
  `display_name` varchar(255) NOT NULL,
  `gender_id` int(11) NOT NULL,
  `date_of_birth` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `mobile_no` int(11) NOT NULL,
  `designation` varchar(255) NOT NULL,
  `emp_type` int(11) NOT NULL,
  `join_date` varchar(255) NOT NULL,
  `experience` int(11) NOT NULL,
  `salary` int(11) NOT NULL,
  `personal_notes` varchar(255) NOT NULL,
  PRIMARY KEY (`emp_id`),
  KEY `foriegn_key1` (`gender_id`),
  KEY `foriegn_key2` (`emp_type`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`emp_id`, `full_name`, `name_initial`, `display_name`, `gender_id`, `date_of_birth`, `email`, `mobile_no`, `designation`, `emp_type`, `join_date`, `experience`, `salary`, `personal_notes`) VALUES
(1, 'John Martin', 'A.J. Martin', 'Martin', 1, '18/07/1982', 'martin1@test.com', 711234547, 'Associate Tech Lead', 2, '15/10/2014', 2, 150000, 'Strong Team Player and communication skills'),
(3, 'Alex Rulez', 'A. Rulez', 'Rulez', 1, '05/10/1970', 'rulez@test.com', 701234567, 'Senior Developer', 2, '15/12/2018', 4, 100000, 'Strong Communication Skills'),
(4, 'Alex Faseer', 'A. Rulez', 'Rulez', 1, '05/10/1970', 'rulez@test.com', 701234567, 'Senior Developer', 2, '15/12/2018', 4, 100000, 'Strong Communication Skills'),
(6, 'Fawas Faseer', 'A. Rulez', 'Rulez', 1, '05/10/1970', 'rulez@test.com', 701234567, 'Senior Developer', 1, '15/12/2018', 4, 100000, 'Strong Communication Skills'),
(7, 'Fawas Faseer', 'A. Rulez', 'Rulez', 1, '05/10/1970', 'rulez@test.com', 701234567, 'Senior Developer', 1, '15/12/2018', 4, 100000, 'Strong Communication Skills');

-- --------------------------------------------------------

--
-- Table structure for table `employee_types`
--

DROP TABLE IF EXISTS `employee_types`;
CREATE TABLE IF NOT EXISTS `employee_types` (
  `emp_type_id` int(11) NOT NULL AUTO_INCREMENT,
  `emp_type_name` varchar(255) NOT NULL,
  PRIMARY KEY (`emp_type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `employee_types`
--

INSERT INTO `employee_types` (`emp_type_id`, `emp_type_name`) VALUES
(1, 'Full time'),
(2, 'Part time'),
(3, 'Contract Basis'),
(4, 'Other');

-- --------------------------------------------------------

--
-- Table structure for table `gender_type`
--

DROP TABLE IF EXISTS `gender_type`;
CREATE TABLE IF NOT EXISTS `gender_type` (
  `gen_id` int(11) NOT NULL AUTO_INCREMENT,
  `gen_name` varchar(255) NOT NULL,
  PRIMARY KEY (`gen_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `gender_type`
--

INSERT INTO `gender_type` (`gen_id`, `gen_name`) VALUES
(1, 'Male'),
(2, 'Female');

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
