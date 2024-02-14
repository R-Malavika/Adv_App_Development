package com.agro.agro.Repository;

import com.agro.agro.Entity.Contact;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactRepo extends JpaRepository<Contact, Long> {
    Optional<Contact> findById(Long id);
    // You can add custom query methods here if needed
}
