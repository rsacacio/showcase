package br.com.rsacacio.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.rsacacio.model.Produto;
import br.com.rsacacio.repository.ProdutoRepository;

@RestController
@RequestMapping(value = "/produtos")
public class ProdutoController {

	@Autowired
	private ProdutoRepository repository;
	
	@ResponseBody
	@RequestMapping(value = "/list", method=RequestMethod.GET)
	public Iterable<Produto> list(){
		return this.repository.findAll();
	}
	
	@ResponseBody
	@RequestMapping(value ="/{id}")
	public Produto get(@PathVariable final Long id){
		return this.repository.findOne(id);
	}
	
	@ResponseBody
	@RequestMapping(value = "/save", method = RequestMethod.POST, produces = "application/json")
	public Produto save(@RequestBody final Produto produto){
		return this.repository.save(produto);
	}
	
	@ResponseBody
	@RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE, produces = "application/json")
	public void delete(@PathVariable final Long id){
		this.repository.delete(id);
	}
}
