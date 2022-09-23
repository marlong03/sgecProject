-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-06-2022 a las 04:26:10
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
-- Base de datos: `sgecr`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoriainsumos`
--

CREATE TABLE `categoriainsumos` (
  `idCategoriaInsumos` int(11) NOT NULL,
  `nombreCategoria` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ciudades`
--

CREATE TABLE `ciudades` (
  `id` int(50) NOT NULL,
  `nombre_ciudad` varchar(100) NOT NULL,
  `codigo_ciudad` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `ciudades`
--

INSERT INTO `ciudades` (`id`, `nombre_ciudad`, `codigo_ciudad`) VALUES
(1, 'bogota', 'BOG'),
(2, 'bucaramanga', 'BUC'),
(7, 'cucutaaa', 'cucc'),
(10, 'barranquilla', 'quilla'),
(11, 'santa marta', 'smarta'),
(12, 'girardot', 'gir');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detallesporventa`
--

CREATE TABLE `detallesporventa` (
  `idDetalleVenta` int(11) NOT NULL,
  `tipoMercancia` varchar(100) NOT NULL,
  `cantidadDetalle` int(11) NOT NULL,
  `valorUnitario` decimal(2,0) NOT NULL,
  `iva` int(11) NOT NULL,
  `subTotal` decimal(2,0) NOT NULL,
  `totalGeneral` decimal(2,0) NOT NULL,
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
  `valorUnitarioInsumo` decimal(2,0) NOT NULL,
  `unidadInsumo` varchar(10) NOT NULL,
  `valorTotalInsumo` varchar(45) NOT NULL,
  `fechaIngreso` datetime NOT NULL,
  `estadoInsumo` varchar(50) NOT NULL,
  `fk_idCategoriaInsumos` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `idPedido` int(11) NOT NULL,
  `referenciaPedido` varchar(45) NOT NULL,
  `fechaPedido` datetime NOT NULL,
  `descripcionPedido` varchar(200) NOT NULL,
  `destinoPedido` varchar(50) NOT NULL,
  `detalleDestinoPedido` varchar(60) NOT NULL,
  `valorPedido` decimal(10,0) UNSIGNED NOT NULL,
  `observacionPedido` varchar(500) NOT NULL,
  `fk_idUsuario` int(11) NOT NULL,
  `estadoPedido` varchar(45) NOT NULL DEFAULT 'Pendiente'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `pedidos`
--

INSERT INTO `pedidos` (`idPedido`, `referenciaPedido`, `fechaPedido`, `descripcionPedido`, `destinoPedido`, `detalleDestinoPedido`, `valorPedido`, `observacionPedido`, `fk_idUsuario`, `estadoPedido`) VALUES
(1, '1aef4', '2020-02-01 02:02:02', 'hamburguesa doble,haburguesa carne,gaseosa cuatro,gaseosa personal cocacola', 'casa', 'calle 100', '40', 'la haburguesa de carne sin cebolla, gracias', 1, 'Pendiente');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos_has_productos`
--

CREATE TABLE `pedidos_has_productos` (
  `idPedidos_has_productos` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `pedidos_idPedidos` int(11) NOT NULL,
  `productos_idProductos` int(11) NOT NULL,
  `valorUnitario` decimal(10,0) NOT NULL,
  `valorTotal` decimal(10,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `permisos`
--

CREATE TABLE `permisos` (
  `idPermisos` int(11) NOT NULL,
  `Rol_has_permisos_Rol_idRol` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `idProducto` int(11) NOT NULL,
  `nombreProducto` varchar(250) NOT NULL,
  `valorProducto` decimal(2,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
(2, 'administrador'),
(3, 'DOMICILIARIO'),
(4, 'CLIENTE');

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
(1, 'juanmecanico', 2147483647, 'juancho@gmail.com', 'junacho', b'1', NULL, NULL, 1),
(2, 'adolfo', 3324532, 'adolfo@gmail.com', 'adolfito', b'0', '1efr2', 'calle 23', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ventas`
--

CREATE TABLE `ventas` (
  `idVentas` int(11) NOT NULL,
  `fechaVenta` date NOT NULL,
  `totalVenta` decimal(2,0) NOT NULL,
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
-- Indices de la tabla `ciudades`
--
ALTER TABLE `ciudades`
  ADD PRIMARY KEY (`id`);

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
  MODIFY `idCategoriaInsumos` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `ciudades`
--
ALTER TABLE `ciudades`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `detallesporventa`
--
ALTER TABLE `detallesporventa`
  MODIFY `idDetalleVenta` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `insumos`
--
ALTER TABLE `insumos`
  MODIFY `idInsumo` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `idPedido` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `pedidos_has_productos`
--
ALTER TABLE `pedidos_has_productos`
  MODIFY `idPedidos_has_productos` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `permisos`
--
ALTER TABLE `permisos`
  MODIFY `idPermisos` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `idProducto` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `idRol` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `ventas`
--
ALTER TABLE `ventas`
  MODIFY `idVentas` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
