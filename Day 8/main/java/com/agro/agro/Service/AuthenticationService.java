package com.agro.agro.Service;


import com.agro.agro.dto.request.LoginRequest;
import com.agro.agro.dto.request.RegisterRequest;
import com.agro.agro.dto.response.LoginResponse;
import com.agro.agro.dto.response.RegisterResponse;

public interface AuthenticationService {
    RegisterResponse register(RegisterRequest request);

    LoginResponse login(LoginRequest request);
}