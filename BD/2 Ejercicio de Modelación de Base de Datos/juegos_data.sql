USE juegos_olimpicos;

INSERT INTO Pais VALUES 
("Mexico",1,10),
("Italia",1,20), 
("Brasil",1,14),
("Japon",1,7),
("USA",1,17),
("Argentina",1,17),
("China",1,17),
("Netherlands",1,17),
("Chile",1,17),
("Francia",1,17);




INSERT INTO Deportista VALUES 
("A001","Dulce","Garcia","Femenino","Mexico"),
("A003","Piero","Garcia","Masculino","Italia"),
("A004","Bruna","Silva","Femenino","Brasil"),
("A005","Hiroshi","Sato","Masculino","Japon"),
("A006","Kimberly","Kardashian","Femenino","USA"),
("A007","Maria","Santo","Femenino","Argentina"),
("A008","Yu","Shu","Masculino","China"),
("A009","Ben","Ole","Masculino","Netherlands"),
("A010","Ramon","Ruiz","Masculino","Chile"),
("A011","Marie","Paris","Femenino","Francia");

INSERT INTO Disciplina VALUES 
("D001","400m","Natacion",1),
("D002","100m","Atletismo",2),
("D003","10km","Caminata",2),
("D004","800m","Ciclismo",3);

INSERT INTO Prueba VALUES
("P001","D001","2023/01/01","Alberca",10,"Clasificacion"),
("P002","D002","2023/01/02","Cancha 3",20,"Eliminatoria"),
("P003","D003","2023/01/03","Cancha 1",40,"Final"),
("P004","D004","2023/01/04","Pista",10,"Final");


INSERT INTO Clasificacion (matricula_deportista, identificador_prueba, rango) VALUES
("A001","P001",2),
("A003","P001",1),
("A004","P001",3),
("A005","P002",1),
("A006","P002",2),
("A007","P002",3),
("A008","P003",3),
("A009","P003",2),
("A010","P003",1),
("A011","P004",2),
("A001","P004",1),
("A004","P004",3);


INSERT INTO Resultado VALUES
("D001","A001","A006","A003"),
("D002","A003","A011","A008"),
("D003","A007","A009","A006"),
("D004","A010","A003","A011");




