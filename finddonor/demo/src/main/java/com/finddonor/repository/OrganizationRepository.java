package com.finddonor.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.finddonor.entity.Organization;

@Repository
public interface OrganizationRepository extends JpaRepository<Organization, Long> {

    boolean existsByUsernameAndPassword(String username, String password);

    Organization findByUsernameAndPassword(String username, String password);

}
