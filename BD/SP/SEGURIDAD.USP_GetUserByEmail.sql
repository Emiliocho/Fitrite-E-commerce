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
	SELECT * FROM SEGURIDAD.USUARIOS
	WHERE correo = @i_correo
END
GO

EXEC SEGURIDAD.USP_GetUserByEmail 'massiditor@gmail.com';