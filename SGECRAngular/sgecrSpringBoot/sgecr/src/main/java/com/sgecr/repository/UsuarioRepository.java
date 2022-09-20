package com.sgecr.repository;

import org.springframework.data.jpa.repository.JpaRepository;
/* import org.springframework.data.repository.CrudRepository; */
import org.springframework.stereotype.Repository;

import com.sgecr.model.Usuario;
@Repository
public interface UsuarioRepository extends JpaRepository<Usuario,Integer> {
    Usuario findByEmailusuarioAndContrasenausuario(String emailusuario,String contrasenausuario);
       
}
