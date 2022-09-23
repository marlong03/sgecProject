package com.sgecr.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sgecr.model.Pedido;
import com.sgecr.repository.PedidoRepository;

@Service
public class PedidoService {
    @Autowired
    PedidoRepository repository;

    public List<Pedido>getPedidos(){
        return repository.findAll();
    }
}
