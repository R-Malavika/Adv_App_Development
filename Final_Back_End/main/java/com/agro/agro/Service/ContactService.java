package com.agro.agro.Service;

import com.agro.agro.Entity.Contact;
import com.agro.agro.dto.ContactDto;
import com.agro.agro.mapper.Contactmapper;
import com.agro.agro.Repository.ContactRepo;
import java.util.Optional;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

@Service
public class ContactService {

    private final ContactRepo contactRepository;

    public ContactService(ContactRepo contactRepository) {
        this.contactRepository = contactRepository;
    }

    public ContactDto createContact(ContactDto contactDto) {
        Contact contact = Contactmapper.toEntity(contactDto);
        contact = contactRepository.save(contact);
        return Contactmapper.toDto(contact);
    }

    public List<ContactDto> getAllContacts() {
        List<Contact> contacts = contactRepository.findAll();
        return contacts.stream()
                .map(Contactmapper::toDto)
                .collect(Collectors.toList());
    }

    public ContactDto getContactById(Long id) {
        Optional<Contact> contactOptional = contactRepository.findById(id);
        return contactOptional.map(Contactmapper::toDto).orElse(null);
    }

    // If you need to implement other service methods, you can add them here

}
