package com.sgecr.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name = "pedidos")
public class Pedido {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idpedido;
    @Column
    private String referenciapedido; 
    @Column
    private String descripcionpedido;
    @Column
    private String destinopedido;
    @Column
    private String detalledestinopedido;
    @Column
    private String valorpedido;
    @Column
    private String observacionpedido;
    @Column
    private int fk_idusuario;
    @Column
    private String estadopedido;
    @Column
    private String fechapedido;
    @Column
    private int fk_iddomiciliario;

    public Pedido() {
    }
    
    public Pedido(int idpedido, String referenciapedido, String descripcionpedido, String destinopedido,
            String detalledestinopedido, String valorpedido, String observacionpedido, int fk_idusuario,
            String estadopedido, String fechapedido, int fk_iddomiciliario) {
        this.idpedido = idpedido;
        this.referenciapedido = referenciapedido;
        this.descripcionpedido = descripcionpedido;
        this.destinopedido = destinopedido;
        this.detalledestinopedido = detalledestinopedido;
        this.valorpedido = valorpedido;
        this.observacionpedido = observacionpedido;
        this.fk_idusuario = fk_idusuario;
        this.estadopedido = estadopedido;
        this.fechapedido = fechapedido;
        this.fk_iddomiciliario = fk_iddomiciliario;
    }

    public int getIdpedido() {
        return idpedido;
    }
    public void setIdpedido(int idpedido) {
        this.idpedido = idpedido;
    }
    public String getReferenciapedido() {
        return referenciapedido;
    }
    public void setReferenciapedido(String referenciapedido) {
        this.referenciapedido = referenciapedido;
    }
    public String getDescripcionpedido() {
        return descripcionpedido;
    }
    public void setDescripcionpedido(String descripcionpedido) {
        this.descripcionpedido = descripcionpedido;
    }
    public String getDestinopedido() {
        return destinopedido;
    }
    public void setDestinopedido(String destinopedido) {
        this.destinopedido = destinopedido;
    }
    public String getDetalledestinopedido() {
        return detalledestinopedido;
    }
    public void setDetalledestinopedido(String detalledestinopedido) {
        this.detalledestinopedido = detalledestinopedido;
    }
    public String getValorpedido() {
        return valorpedido;
    }
    public void setValorpedido(String valorpedido) {
        this.valorpedido = valorpedido;
    }
    public String getObservacionpedido() {
        return observacionpedido;
    }
    public void setObservacionpedido(String observacionpedido) {
        this.observacionpedido = observacionpedido;
    }
    public int getFk_idusuario() {
        return fk_idusuario;
    }
    public void setFk_idusuario(int fk_idusuario) {
        this.fk_idusuario = fk_idusuario;
    }
    public String getEstadopedido() {
        return estadopedido;
    }
    public void setEstadopedido(String estadopedido) {
        this.estadopedido = estadopedido;
    }
    public String getFechapedido() {
        return fechapedido;
    }
    public void setFechapedido(String fechapedido) {
        this.fechapedido = fechapedido;
    }
    public int getFk_iddomiciliario() {
        return fk_iddomiciliario;
    }
    public void setFk_iddomiciliario(int fk_iddomiciliario) {
        this.fk_iddomiciliario = fk_iddomiciliario;
    }
    
}
