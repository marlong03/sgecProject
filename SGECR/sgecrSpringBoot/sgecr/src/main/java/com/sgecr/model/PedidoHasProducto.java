package com.sgecr.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name = "pedidos_has_productos")
public class PedidoHasProducto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idpedidos_has_productos;

    @Column
    private int cantidad;
    @Column
    private int pedidos_idpedidos;
    @Column
    private int productos_idproductos;
    @Column
    private int valorunitario;
    @Column
    private int valortotal;
    public PedidoHasProducto() {
    }
    public PedidoHasProducto(int idpedidos_has_productos, int cantidad, int pedidos_idpedidos,
            int productos_idproductos, int valorunitario, int valortotal) {
        this.idpedidos_has_productos = idpedidos_has_productos;
        this.cantidad = cantidad;
        this.pedidos_idpedidos = pedidos_idpedidos;
        this.productos_idproductos = productos_idproductos;
        this.valorunitario = valorunitario;
        this.valortotal = valortotal;
    }
    public int getIdpedidos_has_productos() {
        return idpedidos_has_productos;
    }
    public void setIdpedidos_has_productos(int idpedidos_has_productos) {
        this.idpedidos_has_productos = idpedidos_has_productos;
    }
    public int getCantidad() {
        return cantidad;
    }
    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }
    public int getPedidos_idpedidos() {
        return pedidos_idpedidos;
    }
    public void setPedidos_idpedidos(int pedidos_idpedidos) {
        this.pedidos_idpedidos = pedidos_idpedidos;
    }
    public int getProductos_idproductos() {
        return productos_idproductos;
    }
    public void setProductos_idproductos(int productos_idproductos) {
        this.productos_idproductos = productos_idproductos;
    }
    public int getValorunitario() {
        return valorunitario;
    }
    public void setValorunitario(int valorunitario) {
        this.valorunitario = valorunitario;
    }
    public int getValortotal() {
        return valortotal;
    }
    public void setValortotal(int valortotal) {
        this.valortotal = valortotal;
    }
    

    
}
