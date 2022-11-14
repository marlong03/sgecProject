-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-11-2022 a las 00:39:25
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `dbsgecrangular`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoriainsumos`
--

CREATE TABLE `categoriainsumos` (
  `idCategoriaInsumos` int(11) NOT NULL,
  `nombreCategoria` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `categoriainsumos`
--

INSERT INTO `categoriainsumos` (`idCategoriaInsumos`, `nombreCategoria`) VALUES
(1, 'nevera'),
(2, 'panaderia');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detallesporventa`
--

CREATE TABLE `detallesporventa` (
  `idDetalleVenta` int(11) NOT NULL,
  `tipoMercancia` varchar(100) NOT NULL,
  `cantidadDetalle` int(11) NOT NULL,
  `valorUnitario` int(20) NOT NULL,
  `iva` int(11) NOT NULL,
  `subTotal` int(20) NOT NULL,
  `totalGeneral` int(20) NOT NULL,
  `productos_idProductos` int(11) NOT NULL,
  `Ventas_idVentas` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `insumos`
--

CREATE TABLE `insumos` (
  `idInsumo` int(11) NOT NULL,
  `nombreInsumo` varchar(250) NOT NULL,
  `cantidadInsumo` int(11) NOT NULL,
  `unidadInsumo` varchar(10) NOT NULL,
  `valorTotalInsumo` int(30) NOT NULL,
  `fechaIngreso` varchar(100) DEFAULT NULL,
  `estadoInsumo` varchar(50) NOT NULL,
  `fk_idCategoriaInsumos` int(11) NOT NULL,
  `valorUnitarioInsumo` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `insumos`
--

INSERT INTO `insumos` (`idInsumo`, `nombreInsumo`, `cantidadInsumo`, `unidadInsumo`, `valorTotalInsumo`, `fechaIngreso`, `estadoInsumo`, `fk_idCategoriaInsumos`, `valorUnitarioInsumo`) VALUES
(15, '', 0, '', 0, '2022-00-00', 'Activo', 2, 0),
(16, 'pan hamburguesaqq', 12, 'und', 17208, '2022-00-00', 'Activo', 2, 1434),
(17, 'queso', 22, 'und', 2684, '2022-00-00', 'Activo', 2, 122),
(18, 'mazorca', 0, '', 0, '2022-00-00', 'Activo', 2, 0),
(19, 'lulo', 22, 'kl', 22000, '2022-00-00', 'Activo', 2, 1000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `idPedido` int(11) NOT NULL,
  `referenciaPedido` varchar(45) NOT NULL,
  `descripcionPedido` varchar(200) NOT NULL,
  `destinoPedido` varchar(50) NOT NULL,
  `detalleDestinoPedido` varchar(60) NOT NULL,
  `valorPedido` int(11) NOT NULL,
  `observacionPedido` varchar(500) NOT NULL,
  `fk_idUsuario` int(11) NOT NULL,
  `estadoPedido` varchar(45) NOT NULL DEFAULT 'Pendiente',
  `fechaPedido` date DEFAULT NULL,
  `fk_idDomiciliario` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `pedidos`
--

INSERT INTO `pedidos` (`idPedido`, `referenciaPedido`, `descripcionPedido`, `destinoPedido`, `detalleDestinoPedido`, `valorPedido`, `observacionPedido`, `fk_idUsuario`, `estadoPedido`, `fechaPedido`, `fk_idDomiciliario`) VALUES
(2, '43asv', 'hamburguesa simple', 'mesa', '3', 10000, 'sin obser', 2, 'entregado', '2022-09-18', 6),
(3, 'ver54', 'hamburguesa doble,haburguesa carne,gaseosa cuatro,gaseosa personal cocacola', 'casa', 'calle 102', 40, 'la haburguesa de carne sin cebolla, gracias', 3, 'Cancelado', '2020-02-06', 5),
(9, 'bb41d6', '[2 - Salchipapa],[5 - Hamburguesa Simple]', 'domicilio', 'calle 34', 74000, 'yo voy ahorita', 1, 'Entregado', '2022-11-01', 5),
(10, '833513', '[1 - Hamburguesa Simple],[3 - Crepe Simple]', 'domicilio', 'calle 23', 22000, 'el crepe con frutas porfa', 1, 'Cancelado', '2022-11-01', 6),
(11, '61e410', '[20 - Hamburguesa Doble]', 'domicilio', 'calle45 patio bonito', 240000, 'aqui espero tenog hambre', 1, 'Cancelado', '2022-11-04', 5),
(12, '60e3d9', '[4 - Hamburguesa Simple]', 'domicilio', 'calle45 suba', 40000, 'aqui espero tenog hambre muchaa', 1, 'en camino', '2022-11-04', 5),
(13, 'c077a5', '[2 - Salchipapa]', 'domicilio', 'carrera46', 24000, '', 1, 'Cancelado', '2022-11-04', 5),
(14, '2ebede', '[3 - Choriperro],[2 - Perro Caliente Simple],[3 - Hamburguesa Doble],[3 - Salchipapa],[3 - Hamburguesa Simple]', '', '', 133000, '', 1, 'Cancelado', '2022-11-04', 7),
(15, '3de9cc', '[1 - Hamburguesa Simple]', 'mesa', '', 10000, '', 1, 'Cancelado', '2022-11-04', 0),
(16, '1c7387', '[4 - Salchipapa],[4 - Hamburguesa Simple]', 'domicilio', 'calle45 suba', 88000, '', 1, 'Cancelado', '2022-11-04', 0),
(17, 'b4c6ed', '[2 - Hamburguesa Simple],[2 - Salchipapa]', 'domicilio', 'carrera46', 44000, '', 1, 'Cancelado', '2022-11-04', 0),
(18, '802ac7', '[1 - Hamburguesa Simple]', 'domicilio', 'calle45 suba', 10000, '', 1, 'Cancelado', '2022-11-04', 0),
(19, 'c00dc0', '[4 - Hamburguesa Simple],[2 - Hamburguesa Doble],[3 - Choriperro],[2 - Perro Caliente Simple],[1 - Crepe Simple]', 'domicilio', 'carrera 33', 99000, '', 1, 'Cancelado', '2022-11-04', 0),
(20, '56b6c9', '[1 - Hamburguesa Simple]', 'mesa', '6', 10000, 'sin aji', 1, 'Cancelado', '2022-11-04', 0),
(21, 'fe27c6', '[3 - Hamburguesa Simple]', 'recoge', 'calle 23', 30000, 'voy en 5mins', 1, 'Cancelado', '2022-11-04', 0),
(22, '1d6ddd', '[2 - Hamburguesa Doble],[5 - Salchipapa],[1 - Crepe Simple],[3 - Mazorcada],[2 - Brownie Con Helado]', '', '7', 131600, 'aqui espero tenog hambre', 1, 'Cancelado', '2022-11-04', 0),
(23, 'f40d9f', '[6 - Hamburguesa Doble],[2 - Salchipapa],[3 - Hamburguesa Simple]', 'domicilio', 'carrera 7 #34 56', 126000, 'rapido porfa', 1, 'entregado', '2022-11-04', 5),
(24, '87f013', '[3 - Salchipapa]', 'domicilio', 'carrera 55', 36000, 'sin sal', 1, 'Enviado', '2022-11-04', 5),
(25, '6c3665', '[1 - Mazorcada],[1 - Choriperro]', 'mesa', '2', 18000, '', 1, 'Enviado', '2022-11-04', 0),
(26, 'e408bc', '[4 - Hamburguesa Simple]', 'recoge', '', 40000, 'llego tarde ', 1, 'Enviado', '2022-11-05', 0),
(27, '353dc5', '[1 - Hamburguesa Simple]', 'mesa', '', 10000, 'el crepe con frutas porfa', 1, 'Cancelado', '2022-11-05', 0),
(28, '08d3bd', '[1 - Hamburguesa Simple]', 'mesa', '', 10000, '', 1, 'Cancelado', '2022-11-05', 0),
(29, '167867', '[1 - Hamburguesa Simple]', 'recoge', '', 10000, '', 1, 'Cancelado', '2022-11-05', 0),
(30, '59cf42', '[1 - Salchipapa]', 'mesa', '', 12000, '', 1, 'Cancelado', '2022-11-05', 0),
(31, '50b54b', '[1 - Hamburguesa Doble],[2 - Salchipapa],[1 - Hamburguesa Simple]', 'recoge', '', 46000, '', 1, 'Cancelado', '2022-11-05', 0),
(32, 'f73ff8', '[1 - Hamburguesa Doble],[5 - Hamburguesa Simple]', 'mesa', '', 62000, 'sin salecita porfa', 1, 'Cancelado', '2022-11-05', 0),
(33, 'bddcf7', '[1 - Hamburguesa Simple],[4 - Hamburguesa Doble]', 'recoge', '', 58000, '', 1, 'Cancelado', '2022-11-05', 0),
(34, 'eae07f', '[1 - Hamburguesa Simple]', 'mesa', '3', 10000, '', 1, 'Cancelado', '2022-11-05', 0),
(35, '8d0143', '[1 - Hamburguesa Simple]', 'mesa', '1', 10000, '', 1, 'Enviado', '2022-11-05', 0),
(36, '3e847d', '[3 - Perro Caliente Simple],[4 - Brownie Con Helado],[2 - Mazorcada]', 'mesa', '1', 58200, '', 1, 'Enviado', '2022-11-05', 0),
(37, '16c745', '[3 - Salchipapa]', 'mesa', '8', 36000, '', 1, 'Enviado', '2022-11-05', 0),
(38, '34b333', '[1 - Hamburguesa Simple]', 'domicilio', '12312321', 10000, '12321', 9, 'Enviado', '2020-02-02', 5),
(39, 'b3b4b8', '[1 - Salchipapa]', 'domicilio', '', 12000, '', 9, 'Enviado', '2020-02-02', 5),
(40, 'fe5c0e', '[1 - Salchipapa],[1 - Hamburguesa Doble]', 'domicilio', 'calle45 patio bonito', 24000, 'sin leche', 9, 'Enviado', '2020-02-02', 6),
(41, '5f460e', '[1 - Hamburguesa Simple],[1 - Hamburguesa Doble]', 'domicilio', '', 22000, '', 9, 'Enviado', '2020-02-02', 7),
(42, '308603', '[1 - Hamburguesa Doble]', 'domicilio', 'carrera46', 12000, '', 9, 'Enviado', '2020-02-02', 7),
(43, 'f4b871', '[1 - Hamburguesa Doble]', 'domicilio', 'carrera46', 12000, '', 9, 'Enviado', '2020-02-02', 8),
(44, '20d838', '[1 - Hamburguesa Simple]', 'domicilio', '2 manzanas', 10000, '', 9, 'cancelado', '2020-02-02', 20),
(45, '56a069', '[1 - Hamburguesa Simple]', 'domicilio', 'carrera46', 10000, '45', 9, 'Cancelado', '2020-02-02', 17),
(46, 'b7b6c7', '[36 - Hamburguesa Doble],[15 - Crepe Simple],[19 - Mazorcada],[109 - Brownie Con Helado],[11 - Choriperro],[24 - Perro Caliente Simple],[9 - Salchipapa],[31 - Hamburguesa Simple]', 'domicilio', 'calle 34 #23 45 barrios unidos', 1893700, 'No timbre que yo bajo,Gracias', 9, 'entregado', '2020-02-02', 20);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos_has_productos`
--

CREATE TABLE `pedidos_has_productos` (
  `idPedidos_has_productos` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `pedidos_idPedidos` int(11) NOT NULL,
  `productos_idProductos` int(11) NOT NULL,
  `valorUnitario` int(20) NOT NULL,
  `valorTotal` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `permisos`
--

CREATE TABLE `permisos` (
  `idPermisos` int(11) NOT NULL,
  `Rol_has_permisos_Rol_idRol` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `permisos`
--

INSERT INTO `permisos` (`idPermisos`, `Rol_has_permisos_Rol_idRol`) VALUES
(1, 1),
(2, 2),
(3, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `idProducto` int(11) NOT NULL,
  `nombreProducto` varchar(250) NOT NULL,
  `valorProducto` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`idProducto`, `nombreProducto`, `valorProducto`) VALUES
(1, 'hamburguesa simple', 10000),
(2, 'salchipapa', 12000),
(3, 'hamburguesa doble', 12000),
(4, 'perro caliente simple', 5000),
(5, 'choriperro', 7000),
(6, 'brownie con helado', 5300),
(7, 'mazorcada', 11000),
(8, 'crepe simple', 4000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos_has_insumos`
--

CREATE TABLE `productos_has_insumos` (
  `insumos_idProductos` int(11) NOT NULL,
  `productos_idProductos` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `idRol` int(11) NOT NULL,
  `nombreRol` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`idRol`, `nombreRol`) VALUES
(1, 'administrador'),
(2, 'domiciliario'),
(3, 'cliente');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol_has_permisos`
--

CREATE TABLE `rol_has_permisos` (
  `Rol_idRol` int(11) NOT NULL,
  `Rol_idRol1` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `idUsuario` int(11) NOT NULL,
  `nombreUsuario` varchar(45) NOT NULL,
  `telefonoUsuario` varchar(20) NOT NULL,
  `emailUsuario` varchar(100) NOT NULL,
  `contrasenaUsuario` varchar(100) NOT NULL,
  `estadoUsuario` int(1) DEFAULT NULL,
  `codigoEmpresarial` varchar(45) DEFAULT NULL,
  `direccionUsuario` varchar(60) DEFAULT NULL,
  `fk_idRol` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`idUsuario`, `nombreUsuario`, `telefonoUsuario`, `emailUsuario`, `contrasenaUsuario`, `estadoUsuario`, `codigoEmpresarial`, `direccionUsuario`, `fk_idRol`) VALUES
(1, 'administrador1', '2147483647', 'administrador1@gmail.com', 'Admin1', 1, 'admin', NULL, 1),
(2, 'adolfoActualizado', '3324532', 'adolfo@hotmail.com', 'adolfo123', 1, '', '', 3),
(5, 'domiciliario1', '653654', 'domiciliario1@gmail.com', 'Domiciliario1', 0, 'domi', NULL, 2),
(6, 'domiciliario2', '7653264', 'domiciliario2@gmail.com', '123123', 0, 'domi', '', 2),
(7, 'domiciliario3', '3024567654', 'domiciliario3@gmail.com', '123123', 0, 'domi', '', 2),
(8, 'domiciliario4', '64565', 'domiciliario4@gmail.com', 'Domiciliario4', 0, 'domi', '', 2),
(9, 'marliton juniior', '123123321', 'marliton@gmail.com', 'Marlong2013', 1, 'Admin', '', 1),
(10, 'administrador2', '14553453', 'administrador2@gmail.com', '123123', 1, 'admin', '', 1),
(11, 'kevin mendez', '1232131', 'kevin@gmail.com', '123123', 1, 'admin', '', 1),
(12, 'chocolate', '111111', 'chocolate@gmail.com', '123123', 1, 'admin', '', 1),
(13, 'andres perez', '2222', 'andresp@gmail.com', '123123', 1, 'admin', '', 1),
(14, 'chiqui2', '1231232132', 'chiqui2@gmail.com', '123123', 1, 'admin', '', 1),
(15, 'as', '123', 'wwww', '123123', 1, 'domi', '', 2),
(16, '', '0', '', '', 1, '', '', 0),
(17, 'joker', '0', 'jockergmail.com', '', 0, 'domi', '', 2),
(18, 'superman', '1434234454', 'superman@gmail.com', '123123', 1, 'admin', '', 1),
(19, 'domiciliario5', '1342342311', 'domiciliario5@gmial.com', '123123', 1, 'domi', '', 2),
(20, 'domiciliario6', '3000000000', 'domiciliario6@gmial.com', '123123', 0, 'domi', '', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ventas`
--

CREATE TABLE `ventas` (
  `idVentas` int(11) NOT NULL,
  `fechaVenta` date NOT NULL,
  `totalVenta` int(50) NOT NULL,
  `Usuarios_idUsuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categoriainsumos`
--
ALTER TABLE `categoriainsumos`
  ADD PRIMARY KEY (`idCategoriaInsumos`);

--
-- Indices de la tabla `detallesporventa`
--
ALTER TABLE `detallesporventa`
  ADD PRIMARY KEY (`idDetalleVenta`);

--
-- Indices de la tabla `insumos`
--
ALTER TABLE `insumos`
  ADD PRIMARY KEY (`idInsumo`);

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`idPedido`);

--
-- Indices de la tabla `pedidos_has_productos`
--
ALTER TABLE `pedidos_has_productos`
  ADD PRIMARY KEY (`idPedidos_has_productos`);

--
-- Indices de la tabla `permisos`
--
ALTER TABLE `permisos`
  ADD PRIMARY KEY (`idPermisos`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`idProducto`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`idRol`);

--
-- Indices de la tabla `rol_has_permisos`
--
ALTER TABLE `rol_has_permisos`
  ADD PRIMARY KEY (`Rol_idRol`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`idUsuario`);

--
-- Indices de la tabla `ventas`
--
ALTER TABLE `ventas`
  ADD PRIMARY KEY (`idVentas`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categoriainsumos`
--
ALTER TABLE `categoriainsumos`
  MODIFY `idCategoriaInsumos` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `detallesporventa`
--
ALTER TABLE `detallesporventa`
  MODIFY `idDetalleVenta` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `insumos`
--
ALTER TABLE `insumos`
  MODIFY `idInsumo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `idPedido` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT de la tabla `pedidos_has_productos`
--
ALTER TABLE `pedidos_has_productos`
  MODIFY `idPedidos_has_productos` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `permisos`
--
ALTER TABLE `permisos`
  MODIFY `idPermisos` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `idProducto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `idRol` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `ventas`
--
ALTER TABLE `ventas`
  MODIFY `idVentas` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
