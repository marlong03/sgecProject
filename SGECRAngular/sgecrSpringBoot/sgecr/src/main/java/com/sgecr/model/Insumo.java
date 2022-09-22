package com.sgecr.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name = "insumos")
public class Insumo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idinsumo;

    @Column
    private String nombreinsumo;
    @Column
    private int cantidadinsumo;
    @Column
    private String unidadinsumo;
    @Column
    private String valortotalinsumo;
    @Column
    private Date fechaingreso;
    @Column
    private String estadoinsumo;
    @Column
    private int fk_idcategoriainsumos;
    @Column
    private int valorunitarioinsumo;
    public Insumo() {
    }
    public Insumo(int idinsumo, String nombreinsumo, int cantidadinsumo, String unidadinsumo, String valortotalinsumo,
            Date fechaingreso, String estadoinsumo, int fk_idcategoriainsumos, int valorunitarioinsumo) {
        this.idinsumo = idinsumo;
        this.nombreinsumo = nombreinsumo;
        this.cantidadinsumo = cantidadinsumo;
        this.unidadinsumo = unidadinsumo;
        this.valortotalinsumo = valortotalinsumo;
        this.fechaingreso = fechaingreso;
        this.estadoinsumo = estadoinsumo;
        this.fk_idcategoriainsumos = fk_idcategoriainsumos;
        this.valorunitarioinsumo = valorunitarioinsumo;
    }
    public int getIdinsumo() {
        return idinsumo;
    }
    public void setIdinsumo(int idinsumo) {
        this.idinsumo = idinsumo;
    }
    public String getNombreinsumo() {
        return nombreinsumo;
    }
    public void setNombreinsumo(String nombreinsumo) {
        this.nombreinsumo = nombreinsumo;
    }
    public int getCantidadinsumo() {
        return cantidadinsumo;
    }
    public void setCantidadinsumo(int cantidadinsumo) {
        this.cantidadinsumo = cantidadinsumo;
    }
    public String getUnidadinsumo() {
        return unidadinsumo;
    }
    public void setUnidadinsumo(String unidadinsumo) {
        this.unidadinsumo = unidadinsumo;
    }
    public String getValortotalinsumo() {
        return valortotalinsumo;
    }
    public void setValortotalinsumo(String valortotalinsumo) {
        this.valortotalinsumo = valortotalinsumo;
    }
    public Date getFechaingresoinsumo() {
        return fechaingreso;
    }
    public void setFechaingresoinsumo(Date fechaingreso) {
        this.fechaingreso = fechaingreso;
    }
    public String getEstadoinsumo() {
        return estadoinsumo;
    }
    public void setEstadoinsumo(String estadoinsumo) {
        this.estadoinsumo = estadoinsumo;
    }
    public int getFk_idcategoriainsumos() {
        return fk_idcategoriainsumos;
    }
    public void setFk_idcategoriainsumos(int fk_idcategoriainsumos) {
        this.fk_idcategoriainsumos = fk_idcategoriainsumos;
    }
    public int getValorunitarioinsumo() {
        return valorunitarioinsumo;
    }
    public void setValorunitarioinsumo(int valorunitarioinsumo) {
        this.valorunitarioinsumo = valorunitarioinsumo;
    }
}
