package com.sgecr.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name = "detallesporventa")
public class DetallePorVenta {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int iddetalleventa;

    @Column
    private String tipomercancia;
    @Column
    private int valorunitario;
    @Column
    private int cantidaddetalle;
    @Column
    private int iva;
    @Column
    private int subtotal;
    @Column
    private int totalgeneral;
    @Column
    private int productos_idproductos;
    @Column
    private int ventas_idventas;
    
    public DetallePorVenta(int iddetalleventa, String tipomercancia, int valorunitario, int cantidaddetalle, int iva,
            int subtotal, int totalgeneral, int productos_idproductos, int ventas_idventas) {
        this.iddetalleventa = iddetalleventa;
        this.tipomercancia = tipomercancia;
        this.valorunitario = valorunitario;
        this.cantidaddetalle = cantidaddetalle;
        this.iva = iva;
        this.subtotal = subtotal;
        this.totalgeneral = totalgeneral;
        this.productos_idproductos = productos_idproductos;
        this.ventas_idventas = ventas_idventas;
    }
    public DetallePorVenta() {
    }
    public int getIddetalleventa() {
        return iddetalleventa;
    }
    public void setIddetalleventa(int iddetalleventa) {
        this.iddetalleventa = iddetalleventa;
    }
    public String getTipomercancia() {
        return tipomercancia;
    }
    public void setTipomercancia(String tipomercancia) {
        this.tipomercancia = tipomercancia;
    }
    public int getValorunitario() {
        return valorunitario;
    }
    public void setValorunitario(int valorunitario) {
        this.valorunitario = valorunitario;
    }
    public int getCantidaddetalle() {
        return cantidaddetalle;
    }
    public void setCantidaddetalle(int cantidaddetalle) {
        this.cantidaddetalle = cantidaddetalle;
    }
    public int getIva() {
        return iva;
    }
    public void setIva(int iva) {
        this.iva = iva;
    }
    public int getSubtotal() {
        return subtotal;
    }
    public void setSubtotal(int subtotal) {
        this.subtotal = subtotal;
    }
    public int getTotalgeneral() {
        return totalgeneral;
    }
    public void setTotalgeneral(int totalgeneral) {
        this.totalgeneral = totalgeneral;
    }
    public int getProductos_idproductos() {
        return productos_idproductos;
    }
    public void setProductos_idproductos(int productos_idproductos) {
        this.productos_idproductos = productos_idproductos;
    }
    public int getVentas_idventas() {
        return ventas_idventas;
    }
    public void setVentas_idventas(int ventas_idventas) {
        this.ventas_idventas = ventas_idventas;
    }
}
