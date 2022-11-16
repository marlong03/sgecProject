package com.sgecr.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "usuarios")
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idusuario;

    @Column
    private String nombreusuario;

    @Column
    private String telefonousuario;

    @Column
    private String emailusuario;
    
    @Column
    private String contrasenausuario;

    @Column
    private int estadousuario;

    @Column
    private String codigoempresarial;

    @Column
    private String direccionusuario;

    @Column(nullable = false)
    private int fk_idrol;

    public Usuario() {
    }

    public Usuario(int idusuario, String nombreusuario, String telefonousuario, String emailusuario,
            String contrasenausuario, int estadousuario, String codigoempresarial, String direccionusuario,
            int fk_idrol) {
        this.idusuario = idusuario;
        this.nombreusuario = nombreusuario;
        this.telefonousuario = telefonousuario;
        this.emailusuario = emailusuario;
        this.contrasenausuario = contrasenausuario;
        this.estadousuario = estadousuario;
        this.codigoempresarial = codigoempresarial;
        this.direccionusuario = direccionusuario;
        this.fk_idrol = fk_idrol;
    }

    public int getidusuario() {
        return idusuario;
    }

    public void setidusuario(int idusuario) {
        this.idusuario = idusuario;
    }

    public String getnombreusuario() {
        return nombreusuario;
    }

    public void setnombreusuario(String nombreusuario) {
        this.nombreusuario = nombreusuario;
    }

    public String gettelefonousuario() {
        return telefonousuario;
    }

    public void settelefonousuario(String telefonousuario) {
        this.telefonousuario = telefonousuario;
    }

    public String getemailusuario() {
        return emailusuario;
    }

    public void setemailusuario(String emailusuario) {
        this.emailusuario = emailusuario;
    }

    public String getcontrasenausuario() {
        return contrasenausuario;
    }

    public void setcontrasenausuario(String contrasenausuario) {
        this.contrasenausuario = contrasenausuario;
    }

    public int getestadousuario() {
        return estadousuario;
    }

    public void setestadousuario(int estadousuario) {
        this.estadousuario = estadousuario;
    }

    public String getcodigoempresarial() {
        return codigoempresarial;
    }

    public void setcodigoempresarial(String codigoempresarial) {
        this.codigoempresarial = codigoempresarial;
    }

    public String getdireccionusuario() {
        return direccionusuario;
    }

    public void setdireccionusuario(String direccionusuario) {
        this.direccionusuario = direccionusuario;
    }

    public int getfk_idrol() {
        return fk_idrol;
    }

    public void setfk_idrol(int fk_idrol) {
        this.fk_idrol = fk_idrol;
    }

    
}
