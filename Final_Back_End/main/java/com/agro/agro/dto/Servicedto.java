package com.agro.agro.dto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Servicedto {
    private Long id;
    private String name;
    private String email;
    private Long mobile;
    private String branch;
    private String scheme;
    private Integer amount;
    private String purpose;
    private String panNum;
    private Integer salary;
    private Long aadharNo;
    private String address;
    private String doctype;

}