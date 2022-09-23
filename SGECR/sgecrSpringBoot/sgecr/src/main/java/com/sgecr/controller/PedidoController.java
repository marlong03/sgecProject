package com.sgecr.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sgecr.model.Pedido;
import com.sgecr.service.PedidoService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/pedido/")

public class PedidoController {
    @Autowired
    PedidoService service;
    
    @GetMapping("all")
    public List<Pedido> getPedidos(){
        return service.getPedidos();
    }
    @GetMapping("{id}")
    public Optional<Pedido> getPedidos(@PathVariable int id){
        return service.getPedido(id);
    }
   
    @PostMapping("new")
    public void postPedido(@RequestBody Pedido u){
        service.postPedido(u);
    }
    @DeleteMapping("{id}")
    public int deletePedido(@PathVariable int id){
        service.deletePedido(id);
        return id;
    }


    
}
