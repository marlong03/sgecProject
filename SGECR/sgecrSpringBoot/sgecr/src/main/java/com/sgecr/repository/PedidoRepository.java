package com.sgecr.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sgecr.model.Pedido;

@Repository
public interface PedidoRepository extends JpaRepository<Pedido,Integer> {
    
}
