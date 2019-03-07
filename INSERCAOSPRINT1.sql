SELECT * FROM ESPECIALIDADES

SELECT * FROM CLINICAS

SELECT * FROM TIPO_USUARIO

SELECT * FROM USUARIOS

SELECT * FROM MEDICOS

SELECT * FROM PRONTUARIO

SELECT * FROM SITUACAO

SELECT * FROM CONSULTAS

SELECT COUNT (*) FROM USUARIOS

SELECT CONVERT(VARCHAR(10), cast(DATA_NASCIMENTO AS DATE), 101) AS [MM/DD/YYYY] FROM PRONTUARIO

CREATE FUNCTION MEDICO (@ESPECIALIDADES INT)
RETURNS TABLE
AS
RETURN SELECT COUNT(*) QUANTIDADES FROM MEDICOS WHERE ID_ESPECIALIDADE = 1;

SELECT FLOOR(DATEDIFF(DAY, DATA_NASCIMENTO, GETDATE()) / 365.25) AS IDADE_PACIENTE FROM PRONTUARIO




INSERT INTO CLINICAS(NOME,ENDERECO,CNPJ,RAZAO_SOCIAL,HORARIO_FUNCIONAMENTO)
VALUES('Clinica Possarle','Av Bar�o Limeira 532 S�o Paulo','86400902000130','SP Medical Group','24')

INSERT INTO TIPO_USUARIO(NOME)
VALUES('Adm'),('Medico'),('Paciente')

INSERT INTO USUARIOS(EMAIL,SENHA,ID_TIPO_USUARIO)
VALUES('@.com.br','123',1)
,('ricardo@spmedicalgroup.com.br','medico321',2)
,('@adm.com.br','adm123',3)

INSERT INTO MEDICOS(CRM, NOME, ID_USUARIO, ID_ESPECIALIDADE, ID_CLINICA)
VALUES('54356','Ricardo Lemos',2,2,6)
,('53452','Roberto Possarle',2,16,6)
,('65463','Helena Strada',2,15,6)

INSERT INTO PRONTUARIO(NOME, ID_USUARIO, DATA_NASCIMENTO, TELEFONE, RG, CPF, ENDERECO)
VALUES('Ligia',1,'13/10/1983','11 34567654','435225435','94839859000','Rua Estado de Israel 240,�S�o Paulo, Estado de S�o Paulo, 04022-000')
,('Alexandre',1,'23/07/2001','11 987656543','326543457','73556944057','Av. Paulista, 1578 - Bela Vista, S�o Paulo - SP, 01310-200')
,('Fernando',1,'10/10/1978','11 972084453','546365253','16839338002','Av. Ibirapuera - Indian�polis, 2927,  S�o Paulo - SP, 04029-200')
,('Henrique',1,'13/10/1985','11 34566543','543663625','14332654765','R. Vit�ria, 120 - Vila Sao Jorge, Barueri - SP, 06402-030')
,('Jo�o',1,'27/08/1975','11 76566377','325444441','91305348010','R. Ver. Geraldo de Camargo, 66 - Santa Luzia, Ribeir�o Pires - SP, 09405-380')
,('Bruno',1,'21/03/1972','11 954368769','545662667','79799299004','Alameda dos Arapan�s, 945 - Indian�polis, S�o Paulo - SP, 04524-001')
,('Mariana',1,'05/03/2018','11 932458999','545662668','13771913039','R Sao Antonio, 232 - Vila Universal, Barueri - SP, 06407-140')

INSERT INTO SITUACAO(STATU)
VALUES('Agendada'),('Realizada'),('Cancelada')

INSERT INTO CONSULTAS(ID_PRONTUARIO, ID_MEDICO, DATA_CONSULTA, ID_SITUACAO, DESCRICAO)
VALUES(7,4,'20/01/2019 15:00',2,'Gripe')
,(2,3,'06/01/2018 10:00',3,NULL)
,(3,3,'07/02/2019 11:00',2,'Catapora')
,(2,3,'06/02/2018 10:00',2,'Queimadura')
,(4,2,'07/02/2019 11:00',3,NULL)
,(7,4,'08/02/2019 15:00',1,NULL)
,(4,2,'09/02/2019 11:00',1,NULL)