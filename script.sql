create database transporter GO;
use transporter GO;
-- Drop table

-- DROP TABLE transporter.dbo.rol GO

CREATE TABLE transporter.dbo.rol (
	id int IDENTITY(1,1) NOT NULL,
	descripcion nvarchar(30) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	CONSTRAINT PK__rol__3213E83FCF077214 PRIMARY KEY (id)
) GO;


-- transporter.dbo.sucursal definition

-- Drop table

-- DROP TABLE transporter.dbo.sucursal GO

CREATE TABLE transporter.dbo.sucursal (
	id int IDENTITY(1,1) NOT NULL,
	nombreSucursal nvarchar(50) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	CONSTRAINT PK__sucursal__3213E83FFA4F1074 PRIMARY KEY (id)
) GO;


-- transporter.dbo.transportista definition

-- Drop table

-- DROP TABLE transporter.dbo.transportista GO

CREATE TABLE transporter.dbo.transportista (
	id int IDENTITY(1,1) NOT NULL,
	nombre nvarchar(30) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	tarifa money NULL,
	CONSTRAINT PK__transpor__3213E83F2B7154F9 PRIMARY KEY (id)
) GO;


-- transporter.dbo.colaborador definition

-- Drop table

-- DROP TABLE transporter.dbo.colaborador GO

CREATE TABLE transporter.dbo.colaborador (
	id int IDENTITY(1,1) NOT NULL,
	nombreColaborador nvarchar(50) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	usuario nvarchar(30) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	password nvarchar(100) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	idRol int NULL,
	tarifa money NULL,
	CONSTRAINT PK__colabora__3213E83F90A6F6BC PRIMARY KEY (id),
	CONSTRAINT FK__colaborad__idRol__2B3F6F97 FOREIGN KEY (idRol) REFERENCES transporter.dbo.rol(id)
) GO;


-- transporter.dbo.colaboradorXsucursal definition

-- Drop table

-- DROP TABLE transporter.dbo.colaboradorXsucursal GO

CREATE TABLE transporter.dbo.colaboradorXsucursal (
	idColaborador int NOT NULL,
	idSucursal int NOT NULL,
	distancia int NULL,
	CONSTRAINT PK__colabora__79D5B502D28047CC PRIMARY KEY (idColaborador,idSucursal),
	CONSTRAINT FK__colaborad__idCol__2E1BDC42 FOREIGN KEY (idColaborador) REFERENCES transporter.dbo.colaborador(id),
	CONSTRAINT FK__colaborad__idSuc__2F10007B FOREIGN KEY (idSucursal) REFERENCES transporter.dbo.sucursal(id)
) GO;


-- transporter.dbo.viaje definition

-- Drop table

-- DROP TABLE transporter.dbo.viaje GO

CREATE TABLE transporter.dbo.viaje (
	id int IDENTITY(1,1) NOT NULL,
	fecha date NULL,
	idTransportista int NULL,
	tarifa money NULL,
	CONSTRAINT PK__viaje__3213E83F56A3B9C2 PRIMARY KEY (id),
	CONSTRAINT FK__viaje__idTranspo__47DBAE45 FOREIGN KEY (idTransportista) REFERENCES transporter.dbo.colaborador(id)
) GO;


-- transporter.dbo.detalleViaje definition

-- Drop table

-- DROP TABLE transporter.dbo.detalleViaje GO

CREATE TABLE transporter.dbo.detalleViaje (
	id int IDENTITY(1,1) NOT NULL,
	idViaje int NULL,
	distancia int NULL,
	idColaborador int NULL,
	CONSTRAINT PK__detalleV__3213E83F783FE5CD PRIMARY KEY (id),
	CONSTRAINT FK__detalleVi__idCol__3F466844 FOREIGN KEY (idColaborador) REFERENCES transporter.dbo.colaborador(id),
	CONSTRAINT FK__detalleVi__idVia__403A8C7D FOREIGN KEY (idViaje) REFERENCES transporter.dbo.viaje(id)
) GO;

