package com.sgecr.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name = "permisos")
public class Permiso {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idpermisos;

    @Column
    private int rol_has_permisos_rol_idrol;

    public Permiso() {
    }

    public Permiso(int idpermisos, int rol_has_permisos_rol_idrol) {
        this.idpermisos = idpermisos;
        this.rol_has_permisos_rol_idrol = rol_has_permisos_rol_idrol;
    }

    public int getIdpermisos() {
        return idpermisos;
    }

    public void setIdpermisos(int idpermisos) {
        this.idpermisos = idpermisos;
    }

    public int getRol_has_permisos_rol_idrol() {
        return rol_has_permisos_rol_idrol;
    }

    public void setRol_has_permisos_rol_idrol(int rol_has_permisos_rol_idrol) {
        this.rol_has_permisos_rol_idrol = rol_has_permisos_rol_idrol;
    }
}
