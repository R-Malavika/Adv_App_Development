package com.agro.agro.Controller;

import com.agro.agro.Entity.DocEntity;
import com.agro.agro.Service.DocService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;

@RestController
@RequestMapping("/api/documents")
public class DocController {

    private final DocService docService;

    @Autowired
    public DocController(DocService docService) {
        this.docService = docService;
    }

    @GetMapping("/{id}")
    public Optional<DocEntity> getDocumentById(@PathVariable Long id) {
        return docService.getDocumentById(id);
    }

    @PostMapping("/save")
    public String saveDocument(@RequestBody DocEntity document) {
        docService.saveDocument(document);
        return "Document saved successfully!";
    }

    @PostMapping("/saveWithFile")
    public String saveDocumentWithFile(@RequestBody DocEntity document, @RequestPart("file") MultipartFile file) {
        try {
            docService.saveDocumentWithFile(document, file);
            return "Document saved successfully!";
        } catch (IOException e) {
            e.printStackTrace();
            return "Error saving document.";
        }
    }
}
