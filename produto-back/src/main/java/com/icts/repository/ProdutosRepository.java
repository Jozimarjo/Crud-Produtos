package com.icts.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.icts.domain.Produto;

@CrossOrigin(origins = "*")
@RepositoryRestResource(collectionResourceRel = "produtos", path = "produtos")
public interface ProdutosRepository  extends PagingAndSortingRepository<Produto, Long>{}
