package com.sgecr.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name = "productos")
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idproducto;

    @Column
    private String nombreproducto;
    @Column
    private int valorproducto;
    public Producto() {
    }
    public Producto(int idproducto, String nombreproducto, int valorproducto) {
        this.idproducto = idproducto;
        this.nombreproducto = nombreproducto;
        this.valorproducto = valorproducto;
    }
    public int getIdproducto() {
        return idproducto;
    }
    public void setIdproducto(int idproducto) {
        this.idproducto = idproducto;
    }
    public String getNombreproducto() {
        return nombreproducto;
    }
    public void setNombreproducto(String nombreproducto) {
        this.nombreproducto = nombreproducto;
    }
    public int getValorproducto() {
        return valorproducto;
    }
    public void setValorproducto(int valorproducto) {
        this.valorproducto = valorproducto;
    }
}
