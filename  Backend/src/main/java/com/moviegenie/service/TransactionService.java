package com.moviegenie.service;

import com.moviegenie.dto.TransactionDTO;
import com.moviegenie.entity.Transaction;
import com.moviegenie.repository.TransactionRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class TransactionService {

    private final TransactionRepository transactionRepository;

    public TransactionService(TransactionRepository transactionRepository) {
        this.transactionRepository = transactionRepository;
    }

    public List<Transaction> getUserTransactions(String userId) {
        return transactionRepository.findByUserId(userId);
    }

    public Transaction createTransaction(String userId, TransactionDTO transactionDTO) {
        Transaction transaction = new Transaction();
        transaction.setUserId(userId);
        transaction.setAmount(transactionDTO.getAmount());
        transaction.setCategory(transactionDTO.getCategory());
        transaction.setDescription(transactionDTO.getDescription());
        transaction.setType(transactionDTO.getType());
        transaction.setDate(transactionDTO.getDate());
        transaction.setRecurring(transactionDTO.isRecurring());
        transaction.setRecurringInterval(transactionDTO.getRecurringInterval());

        return transactionRepository.save(transaction);
    }

    public Transaction updateTransaction(Long transactionId, TransactionDTO transactionDTO) {
        Transaction transaction = transactionRepository.findById(transactionId)
                .orElseThrow(() -> new RuntimeException("Transaction not found"));

        transaction.setAmount(transactionDTO.getAmount());
        transaction.setCategory(transactionDTO.getCategory());
        transaction.setDescription(transactionDTO.getDescription());
        transaction.setType(transactionDTO.getType());
        transaction.setDate(transactionDTO.getDate());
        transaction.setRecurring(transactionDTO.isRecurring());
        transaction.setRecurringInterval(transactionDTO.getRecurringInterval());

        return transactionRepository.save(transaction);
    }
}
