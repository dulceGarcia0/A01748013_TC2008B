SELECT * FROM juegos_olimpicos.Deportista;
SELECT * FROM juegos_olimpicos.Clasificacion;
SELECT * FROM juegos_olimpicos.Pais;
SELECT * FROM juegos_olimpicos.Prueba;
SELECT * FROM juegos_olimpicos.Disciplina;
SELECT * FROM juegos_olimpicos.Resultado; 


-- 1. 
SELECT * FROM juegos_olimpicos.Deportista WHERE nombre_pais = "Mexico";

-- 2. Apellido y nombre de los que ganaron medalla de ORO de USA
SELECT apellido, nombre FROM juegos_olimpicos.Deportista 
INNER JOIN juegos_olimpicos.Resultado
ON Deportista.matricula = Resultado.matricula_oro
WHERE nombre_pais = "USA";


-- 3 
SELECT nombre, apellido FROM juegos_olimpicos.Deportista 
INNER JOIN juegos_olimpicos.Clasificacion
ON Deportista.matricula = Clasificacion.matricula_deportista
WHERE rango = 1;

-- 4
SELECT Disciplina.nombre FROM juegos_olimpicos.Disciplina 
INNER JOIN juegos_olimpicos.Prueba ON Disciplina.identificador = Prueba.identificador
INNER JOIN juegos_olimpicos.Clasificacion ON Prueba.identificador = Clasificacion.identificador_prueba
INNER JOIN juegos_olimpicos.Deportista ON Clasificacion.matricula_deportista = Deportista.matricula
WHERE nombre_pais = "Mexico";

-- 5
SELECT Deportista.nombre, Deportista.apellido FROM juegos_olimpicos.Deportista
WHERE Deportista.matricula NOT IN ( SELECT Resultado.matricula_oro FROM juegos_olimpicos.Resultado );


-- 6
SELECT apellido, nombre FROM juegos_olimpicos.Deportista
INNER JOIN juegos_olimpicos.Clasificacion
ON Deportista.matricula = Clasificacion.matricula_deportista;

-- 7 
-- Nombre de la competencia que aporta el máximo de puntos. 
SELECT MAX(puntos) as PUNTOS, nombre, disciplina FROM juegos_olimpicos.Disciplina;

-- 8 
SELECT Pais.nombre
FROM juegos_olimpicos.Pais
WHERE Pais.nombre NOT IN ( SELECT DISTINCT Deportista.nombre_pais
FROM juegos_olimpicos.Deportista
WHERE Deportista.nombre_pais NOT IN (SELECT DISTINCT nombre_pais
FROM juegos_olimpicos.Clasificacion
INNER JOIN juegos_olimpicos.Prueba ON Clasificacion.identificador_prueba = Prueba.identificador));

-- 9 
SELECT AVG(numero_medalla) FROM juegos_olimpicos.Pais;


-- 10 
-- Cuenta cuantos participantes hay de cada país desde la tabla de deportistas.
SELECT COUNT(Deportista.matricula) AS Participantes, Deportista.nombre_pais AS Pais
FROM juegos_olimpicos.Deportista
GROUP BY nombre_pais;

-- 11
-- El numero de veces que los primeros 5 deportistas clasificaron en toda la olimpiada.
SELECT Deportista.apellido, Deportista.nombre, COUNT(Clasificacion.identificador) AS TotalClasificaciones
FROM juegos_olimpicos.Deportista 
LEFT JOIN juegos_olimpicos.Clasificacion  ON Deportista.matricula = Clasificacion.matricula_deportista
LEFT JOIN Prueba ON Clasificacion.identificador_prueba = Prueba.identificador
GROUP BY Deportista.apellido, Deportista.nombre
ORDER BY TotalClasificaciones DESC
LIMIT 5;



-- 12
-- Los participantes que ganaron oro en disciplinas de terminan con "ismo" como Ciclismo y Atletismo
SELECT Deportista.nombre FROM juegos_olimpicos.Deportista
INNER JOIN juegos_olimpicos.Resultado ON Deportista.matricula = Resultado.matricula_oro
INNER JOIN juegos_olimpicos.Disciplina ON Resultado.identificador_disciplina = Disciplina.identificador
WHERE disciplina LIKE '%ismo';


