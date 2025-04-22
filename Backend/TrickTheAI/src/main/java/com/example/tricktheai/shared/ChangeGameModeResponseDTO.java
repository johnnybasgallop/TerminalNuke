package com.example.tricktheai.shared;

import lombok.Builder;
import lombok.Data;

import java.util.UUID;
@Data
@Builder
public class ChangeGameModeResponseDTO {
    private UUID gameId;
    private GameMode difficulty;
}
