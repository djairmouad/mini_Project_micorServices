-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 21, 2025 at 01:10 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `todo_tasks`
--

-- --------------------------------------------------------

--
-- Table structure for table `task`
--

CREATE TABLE `task` (
  `id` int(11) NOT NULL,
  `nameTask` varchar(50) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `type` enum('Start','Progress','Completed','') NOT NULL,
  `id_user` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `task`
--

INSERT INTO `task` (`id`, `nameTask`, `description`, `type`, `id_user`) VALUES
(8, NULL, NULL, '', '6802eac03f1895a2bab3e568'),
(23, NULL, NULL, '', '6802eac03f1895a2bab3e568'),
(24, NULL, NULL, '', '6802eac03f1895a2bab3e568'),
(25, NULL, NULL, '', '6802eac03f1895a2bab3e568'),
(26, NULL, NULL, '', '6802eac03f1895a2bab3e568'),
(27, NULL, NULL, '', '6802eac03f1895a2bab3e568'),
(28, NULL, NULL, '', '6802eac03f1895a2bab3e568'),
(29, NULL, NULL, '', '6802eac03f1895a2bab3e568'),
(30, NULL, NULL, '', '6802eac03f1895a2bab3e568'),
(31, NULL, NULL, '', '6802eac03f1895a2bab3e568'),
(32, 'hellow', 'heloo', 'Start', '6802eac03f1895a2bab3e568'),
(34, 'yacine', 'eheejej', 'Start', '6802eac03f1895a2bab3e568'),
(35, 'Set up project repo', 'Create a new GitHub repository, initialize it with a README file, and clone it locally to prepare the environment for development.', 'Start', '68057d2c62b9a587ea0dca9f'),
(36, 'Install dependencies', 'Install all necessary packages including React, Tailwind CSS, React Router, and other tools to kickstart the project setup.', 'Start', '68057d2c62b9a587ea0dca9f'),
(37, 'Create project plan', 'Define a clear roadmap for the project, assign roles and responsibilities to team members, and prepare a timeline for each milestone.', 'Start', '68057d2c62b9a587ea0dca9f'),
(38, 'Develop authentication', 'Build secure user authentication with login, register, and password reset functionalities, including form validation and backend integration.', 'Progress', '68057d2c62b9a587ea0dca9f'),
(39, 'Design landing page', 'Create a visually appealing and fully responsive homepage that introduces the product, highlights key features, and includes call-to-action buttons.', 'Progress', '68057d2c62b9a587ea0dca9f'),
(40, 'Set up database', 'Configured MongoDB database, created data models using Mongoose, and established a secure connection with the Node.js server.', 'Completed', '68057d2c62b9a587ea0dca9f');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `task`
--
ALTER TABLE `task`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `task`
--
ALTER TABLE `task`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
