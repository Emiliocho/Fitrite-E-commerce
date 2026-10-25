IF OBJECT_ID('SEGURIDAD.USUARIOS','U') IS NULL
BEGIN
	CREATE TABLE SEGURIDAD.USUARIOS
	(
		usuario_id int primary key identity(1,1),
		correo varchar (100) not null,
		password nvarchar(max) not null,
		rol_id int constraint fk_role_user foreign key (rol_id) references seguridad.roles(rol_id)
	)
END;
GO

--ALTER TABLE SEGURIDAD.USUARIOS
--ALTER column password nvarchar (max) NOT NULL;
--ADD created_by int,
--created_at datetime2,
--updated_by int