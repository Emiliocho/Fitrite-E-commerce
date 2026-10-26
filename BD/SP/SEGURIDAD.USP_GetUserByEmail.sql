CREATE OR ALTER PROC SEGURIDAD.USP_GetUserByEmail
(
	@i_correo nvarchar(100)
)
AS
BEGIN
	IF (@i_correo is null or @i_correo = '')
		BEGIN
			RAISERROR ('El correo es un parametro requerido',16,1);
		END
	SELECT
        usuario_id AS UserId,
        correo AS Email,
        password AS PasswordHash,
        rol_id AS RoleId,
        created_by AS CreatedBy,
        created_at AS CreatedAt,
        updated_by AS UpdatedBy
    FROM SEGURIDAD.USUARIOS
    WHERE correo = @i_correo;
END
GO

EXEC SEGURIDAD.USP_GetUserByEmail 'massiditor@gmail.com';
SELECT * FROM SEGURIDAD.USUARIOS;