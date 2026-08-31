-- Criação do banco de dados
CREATE DATABASE IF NOT EXISTS esports_db;
USE esports_db;

-- Criação da tabela de times
CREATE TABLE IF NOT EXISTS times (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  jogo VARCHAR(100) NOT NULL,
  pais VARCHAR(100) NOT NULL,
  ano_fundacao INT NOT NULL,
  criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Registros iniciais para testes da aplicação
INSERT INTO times (nome, jogo, pais, ano_fundacao) VALUES
('LOUD', 'Valorant', 'Brasil', 2019),
('FURIA Esports', 'CS:GO', 'Brasil', 2017),
('T1', 'League of Legends', 'Coreia do Sul', 2003),
('Sentinels', 'Valorant', 'Estados Unidos', 2016),
('Team Liquid', 'Dota 2', 'Holanda', 2000);