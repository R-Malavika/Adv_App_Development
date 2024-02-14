package com.agro.agro.Repository;

import com.agro.agro.Entity.DocEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DocumentRepository extends JpaRepository<DocEntity, Long> {
    // You can add custom query methods if needed
}
