package com.FindDonar.FindDonar.Jparepository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.FindDonar.FindDonar.Entity.RegisterEntity;
@Repository
public interface RegisterJparepo extends JpaRepository<RegisterEntity, Long>{

    boolean existsByEmailAndPassword(String email, String password);

    RegisterEntity findByEmailAndPassword(String email, String password);

    List<RegisterEntity> findByBloodgrp(String bloodgrp);


} 