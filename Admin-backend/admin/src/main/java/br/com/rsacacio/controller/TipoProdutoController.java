package br.com.rsacacio.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.rsacacio.model.TipoProduto;
import br.com.rsacacio.repository.TipoProdutoRepository;


@RestController
@RequestMapping(value = "/tipoproduto")
public class TipoProdutoController {

	@Autowired
	private TipoProdutoRepository repository;
	
	@ResponseBody
	@RequestMapping(value = "/list", method = RequestMethod.GET)
	public Iterable<TipoProduto> list(){
		return this.repository.findAll();
	}
	
	@ResponseBody
	@RequestMapping(value = "/save", method = RequestMethod.POST)
	public TipoProduto save(@RequestBody final TipoProduto tipoProduto){
		return this.repository.save(tipoProduto);
	}
}
