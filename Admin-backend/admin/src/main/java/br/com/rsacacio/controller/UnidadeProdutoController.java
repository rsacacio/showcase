package br.com.rsacacio.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.rsacacio.model.UnidadeProduto;
import br.com.rsacacio.repository.UnidadeProdutoRepository;


@RestController
@RequestMapping(value = "/unidadeproduto")
public class UnidadeProdutoController {

	@Autowired
	private UnidadeProdutoRepository repository;
	
	@ResponseBody
	@RequestMapping(value = "/list", method = RequestMethod.GET)
	public Iterable<UnidadeProduto> list(){
		return this.repository.findAll();
	}
	
	@ResponseBody
	@RequestMapping(value = "/save", method = RequestMethod.POST)
	public UnidadeProduto save(@RequestBody final UnidadeProduto unidadeProduto){
		return this.repository.save(unidadeProduto);
	}
}
