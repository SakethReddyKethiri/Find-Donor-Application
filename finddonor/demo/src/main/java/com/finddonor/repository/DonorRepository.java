package com.finddonor.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.finddonor.entity.Donors;
@Repository
public interface DonorRepository extends JpaRepository<Donors, Long>{

    List<Donors> findByBloodGroup(String bloodgrp);

    boolean existsByEmailAndName(String email, String name);


} 