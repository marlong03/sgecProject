package com.sgecr.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
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


    
}
