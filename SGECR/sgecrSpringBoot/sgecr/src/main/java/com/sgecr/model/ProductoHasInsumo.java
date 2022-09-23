package com.sgecr.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="productos_has_insumos")
public class ProductoHasInsumo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int insumos_idproductos;

    @Column
    private int productos_idproductos;

    public ProductoHasInsumo() {
    }

    public ProductoHasInsumo(int insumos_idproductos, int productos_idproductos) {
        this.insumos_idproductos = insumos_idproductos;
        this.productos_idproductos = productos_idproductos;
    }

    public int getInsumos_idproductos() {
        return insumos_idproductos;
    }

    public void setInsumos_idproductos(int insumos_idproductos) {
        this.insumos_idproductos = insumos_idproductos;
    }

    public int getProductos_idproductos() {
        return productos_idproductos;
    }

    public void setProductos_idproductos(int productos_idproductos) {
        this.productos_idproductos = productos_idproductos;
    }

}
