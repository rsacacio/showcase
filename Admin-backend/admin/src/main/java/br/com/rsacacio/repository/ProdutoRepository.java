package br.com.rsacacio.repository;

import org.springframework.data.repository.CrudRepository;

import br.com.rsacacio.model.Produto;

public interface ProdutoRepository extends CrudRepository<Produto, Long>{

}
