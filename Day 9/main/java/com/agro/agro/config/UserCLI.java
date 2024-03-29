package com.agro.agro.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.agro.agro.Entity.Users;
import com.agro.agro.Repository.UserRepo;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
@SuppressWarnings("null")
public class UserCLI implements CommandLineRunner {

    private final UserRepo usersRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
        if (usersRepository.count() > 0)
            return;
        var user = Users.builder()
                .name("Admin")
                .email("admin@gmail.com")
                .password(passwordEncoder.encode("Admin@123"))
                .role(com.agro.agro.enumerated.Role.ADMIN)
                .build();
        usersRepository.save(user);
    }

}
