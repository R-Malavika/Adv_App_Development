package com.agro.agro.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;

import com.agro.agro.Entity.DocEntity;
import com.agro.agro.Repository.DocumentRepository;

@Service
public class DocService {

    private final DocumentRepository documentRepository;

    @Autowired
    public DocService(DocumentRepository documentRepository) {
        this.documentRepository = documentRepository;
    }

    public Optional<DocEntity> getDocumentById(Long documentId) {
        return documentRepository.findById(documentId);
    }

    public void saveDocument(DocEntity document) {
        documentRepository.save(document);
    }

    public void saveDocumentWithFile(DocEntity document, MultipartFile file) throws IOException {
        if (file != null) {
            document.setFileType(file.getContentType());
            document.setFileName(file.getOriginalFilename());
            // Save the document to the database or perform additional operations
            documentRepository.save(document);
        }
    }
}
