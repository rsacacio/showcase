package br.com.rsacacio.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.rsacacio.model.Fornecedor;
import br.com.rsacacio.repository.FornecedorRepository;
import br.com.rsacacio.repository.PessoaFisicaRepository;

@RestController
@RequestMapping(value = "/fornecedores")
public class FornecedorController {

	@Autowired
	private FornecedorRepository repository;
	@Autowired
	private PessoaFisicaRepository pessoaFisicaRepository;
	
	@ResponseBody
	@RequestMapping(value = "/list", method=RequestMethod.GET)
	public Iterable<Fornecedor> list(){
		return this.repository.findAll();
	}
	
	@ResponseBody
	@RequestMapping(value ="/{id}")
	public Fornecedor get(@PathVariable final Long id){
		return this.repository.findOne(id);
	}
	
	@ResponseBody
	@RequestMapping(value = "/save", method = RequestMethod.POST, produces = "application/json")
	public Fornecedor save(@RequestBody final Fornecedor fornecedor){
		System.out.println(fornecedor.getCodigo());
		System.out.println(fornecedor.getRepresentante().getCodigo());
		this.pessoaFisicaRepository.save(fornecedor.getRepresentante());
		System.out.println(fornecedor.getCodigo());
		System.out.println(fornecedor.getRepresentante().getCodigo());
		return this.repository.save(fornecedor);
	}
	
	@ResponseBody
	@RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE, produces = "application/json")
	public void delete(@PathVariable final Long id){
		this.repository.delete(id);
	}
}
