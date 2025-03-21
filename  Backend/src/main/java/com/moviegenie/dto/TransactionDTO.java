package com.moviegenie.dto;

import lombok.Data;
import java.time.LocalDateTime;

@Data
public class TransactionDTO {
    private double amount;
    private String category;
    private LocalDateTime timestamp;
}
