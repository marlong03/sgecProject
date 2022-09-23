package com.sgecr.model;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "ventas")
public class Venta {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idventas;

    @Column
    private Date fechaventa;
    @Column
    private int totalventa;
    @Column
    private String usuarios_idusuario;
    public Venta() {
    }
    public Venta(int idventas, Date fechaventa, int totalventa, String usuarios_idusuario) {
        this.idventas = idventas;
        this.fechaventa = fechaventa;
        this.totalventa = totalventa;
        this.usuarios_idusuario = usuarios_idusuario;
    }
    public int getIdventas() {
        return idventas;
    }
    public void setIdventas(int idventas) {
        this.idventas = idventas;
    }
    public Date getFechaventa() {
        return fechaventa;
    }
    public void setFechaventa(Date fechaventa) {
        this.fechaventa = fechaventa;
    }
    public int getTotalventa() {
        return totalventa;
    }
    public void setTotalventa(int totalventa) {
        this.totalventa = totalventa;
    }
    public String getUsuario_idusuario() {
        return usuarios_idusuario;
    }
    public void setUsuario_idusuario(String usuarios_idusuario) {
        this.usuarios_idusuario = usuarios_idusuario;
    }
    
}
