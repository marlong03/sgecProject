package com.sgecr.service;

import java.util.List;
import java.util.Optional;

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
    public Optional<Pedido> getPedido(int id){
        return repository.findById(id);
     }
     public void postPedido(Pedido u){
        repository.save(u);
     }
     public void deletePedido(int id){
      repository.deleteById(id);
   }
}
