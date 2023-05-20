-- DROP SCHEMA IF EXISTS juegos_olimpicos;

CREATE SCHEMA juegos_olimpicos;
USE juegos_olimpicos;

CREATE TABLE Pais (
nombre VARCHAR(50) NOT NULL,
numero_participantes INT NOT NULL,
numero_medalla INT NOT NULL,
PRIMARY KEY  (nombre)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE Deportista (
matricula VARCHAR(15) NOT NULL,
nombre VARCHAR(50) NOT NULL,
apellido VARCHAR(50) NOT NULL,
sexo VARCHAR(10) NOT NULL,
nombre_pais VARCHAR(50) NOT NULL,
PRIMARY KEY  (matricula),
CONSTRAINT `fk_DEPORTISTA_PAIS` FOREIGN KEY (nombre_pais) REFERENCES Pais(nombre) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE Disciplina (
	identificador VARCHAR(50) NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    disciplina VARCHAR(50) NOT NULL,
    puntos INT NOT NULL,
    PRIMARY KEY (identificador)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE Prueba (
	identificador VARCHAR(50) NOT NULL,
    disciplina VARCHAR(50) NOT NULL,
    fecha DATETIME NOT NULL,
    lugar VARCHAR(50) NOT NULL,
    num_deportistas_inscritos INT NOT NULL,
    naturaleza VARCHAR(50) NOT NULL,
    PRIMARY KEY (identificador),
    CONSTRAINT `fk_PRUEBA_DISCIPLINA` FOREIGN KEY (disciplina) REFERENCES Disciplina(identificador) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE Clasificacion (
	identificador INT AUTO_INCREMENT NOT NULL,
    matricula_deportista VARCHAR(15) NOT NULL,
    identificador_prueba VARCHAR(50) NOT NULL,
    rango INT NOT NULL,
    PRIMARY KEY (identificador),
    CONSTRAINT `fk_CLASIFICACION_DEPORTISTA` FOREIGN KEY (matricula_deportista) REFERENCES Deportista(matricula) ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT `fk_CLASIFICACION_PRUEBA` FOREIGN KEY (identificador_prueba) REFERENCES Prueba(identificador) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE Resultado (
	identificador_disciplina VARCHAR(50) NOT NULL,
    matricula_oro VARCHAR(50) NOT NULL,
    matricula_plata VARCHAR(50) NOT NULL,
    matricula_bronce VARCHAR(50) NOT NULL,
    PRIMARY KEY (identificador_disciplina),
    CONSTRAINT `fk_RESULTADO_DISCIPLINA` FOREIGN KEY (identificador_disciplina) REFERENCES Disciplina(identificador) ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT `fk_RESULTADO_DEPORTISTAO` FOREIGN KEY (matricula_oro) REFERENCES Deportista(matricula) ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT `fk_RESULTADO_DEPORTISTAP` FOREIGN KEY (matricula_plata) REFERENCES Deportista(matricula) ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT `fk_RESULTADO_DEPORTISTAB` FOREIGN KEY (matricula_bronce) REFERENCES Deportista(matricula) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;







