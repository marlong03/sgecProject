package com.sgecr.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sgecr.model.CategoriaInsumo;

@Repository
public interface CategoriaInsumoRepository extends JpaRepository<CategoriaInsumo,Integer> {
    
}
