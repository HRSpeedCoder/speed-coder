DROP DATABASE IF EXISTS toy-problems

CREATE DATABASE toy-problems

USE toy-problems

CREATE TABLE problem (
  id SERIAL PRIMARY KEY,
  statement VARCHAR(500),
  stub VARCHAR(100),
  PRIMARY KEY (id)
)

CREATE TABLE solution (
  id SERIAL PRIMARY KEY,
  solution VARCHAR(1000),
  PRIMARY KEY (id)
)

CREATE TABLE test (
  id SERIAL PRIMARY KEY,
  problem_id INT,
  test VARCHAR(500),
  PRIMARY KEY (id)
)

CREATE TABLE problem_test_solution (
  id SERIAL PRIMARY KEY,
  problem_id INTEGER REFERENCES problem(id),
  test_id INTEGER REFERENCES test(id),
  solution_id INTEGER REFERENCES solution(id)
)