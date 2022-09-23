-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-09-2022 a las 04:48:41
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
  `valorTotalInsumo` varchar(45) NOT NULL,
  `fechaIngreso` date NOT NULL,
  `estadoInsumo` varchar(50) NOT NULL,
  `fk_idCategoriaInsumos` int(11) NOT NULL,
  `valorUnitarioInsumo` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `insumos`
--

INSERT INTO `insumos` (`idInsumo`, `nombreInsumo`, `cantidadInsumo`, `unidadInsumo`, `valorTotalInsumo`, `fechaIngreso`, `estadoInsumo`, `fk_idCategoriaInsumos`, `valorUnitarioInsumo`) VALUES
(1, 'pan hamburguesa', 200, 'und', '110000', '2022-09-08', 'Activo', 2, 500),
(2, 'carne res', 20, 'lb', '100000', '2022-09-28', '', 0, 5000);

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
  `valorPedido` decimal(10,0) UNSIGNED NOT NULL,
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
(1, '1aef4', 'hamburguesa doble,haburguesa carne,gaseosa cuatro,gaseosa personal cocacola', 'casa', 'calle 100', '40', 'la haburguesa de carne sin cebolla, gracias', 3, 'Pendiente', '2020-02-03', 5),
(2, '43asv', 'hamburguesa simple', 'mesa', '3', '10000', 'sin obser', 2, 'Pendiente', '2022-09-18', 0);

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
(2, 'salchipapa', 12000);

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
  `telefonoUsuario` int(20) NOT NULL,
  `emailUsuario` varchar(100) NOT NULL,
  `contrasenaUsuario` varchar(100) NOT NULL,
  `estadoUsuario` bit(1) DEFAULT NULL,
  `codigoEmpresarial` varchar(45) DEFAULT NULL,
  `direccionUsuario` varchar(60) DEFAULT NULL,
  `fk_idRol` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`idUsuario`, `nombreUsuario`, `telefonoUsuario`, `emailUsuario`, `contrasenaUsuario`, `estadoUsuario`, `codigoEmpresarial`, `direccionUsuario`, `fk_idRol`) VALUES
(1, 'administrador1', 2147483647, 'administrador1@gmail.com', 'Admin1', b'1', 'admin', NULL, 1),
(2, 'adolfo', 3324532, 'adolfo@gmail.com', 'adolfito', b'1', '', 'calle 23', 3),
(5, 'domiciliario1', 653654, 'domiciliario1@gmail.com', 'Domiciliario1', b'1', 'domi', NULL, 2),
(6, 'domiciliario2', 7653264, 'domiciliario2@gmail.com', 'Domiciliario2', b'1', 'domi', NULL, 2),
(7, 'domiciliario3', 7653264, 'domiciliario3@gmail.com', 'Domiciliario3', b'1', 'domi', NULL, 2),
(8, 'domiciliario4', 64565, 'domiciliario4@gmail.com', 'Domiciliario4', b'1', 'domi', '', 2),
(9, 'marliton juniior', 123123321, 'marliton@gmail.com', 'Marlong2013', b'1', 'Admin', '', 1),
(10, 'administrador2', 14553453, 'administrador2@gmail.com', '123123', b'1', 'admin', '', 1),
(11, 'kevin mendez', 1232131, 'kevin@gmail.com', '123123', b'1', 'admin', '', 1);

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
  MODIFY `idInsumo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `idPedido` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

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
  MODIFY `idProducto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `idRol` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `ventas`
--
ALTER TABLE `ventas`
  MODIFY `idVentas` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
