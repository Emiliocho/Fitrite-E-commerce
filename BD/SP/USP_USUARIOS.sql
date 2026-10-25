CREATE OR ALTER PROC SEGURIDAD.USP_REGISTRAR_USUARIO(
    @i_correo   VARCHAR(50),
    @i_password NVARCHAR(MAX),
    @i_rolId    INT = 4
)
AS
BEGIN
    SET NOCOUNT ON;

    -- Normalización de entrada
    SET @i_correo = LOWER(LTRIM(RTRIM(@i_correo)));

    BEGIN TRY
        -- 1. Validaciones previas fuera de la transacción
        IF @i_correo IS NULL OR @i_correo = ''
        BEGIN
            RAISERROR('Debe ingresar un correo electrónico.', 16,1);
            RETURN;
        END;

        IF @i_correo NOT LIKE '%_@__%.__%'
        BEGIN
            RAISERROR('El formato del correo electrónico no es válido.', 16,1);
            RETURN;
        END;

        IF @i_password IS NULL OR LTRIM(RTRIM(@i_password)) = ''
        BEGIN
            RAISERROR('Debe ingresar una contraseña.', 16,1);
            RETURN
        END;

        -- 2. Transacción de inserción
        BEGIN TRAN;

        -- UPDLOCK y HOLDLOCK bloquean la lectura contra inserciones concurrentes del mismo correo
        IF EXISTS (
            SELECT 1
            FROM SEGURIDAD.USUARIOS WITH (UPDLOCK, HOLDLOCK)
            WHERE correo = @i_correo
        )
        BEGIN
            RAISERROR('El correo ya se encuentra registrado.', 16,1);
            RETURN;
        END;

        INSERT INTO SEGURIDAD.USUARIOS (
            correo,
            password,
            rol_id
        )
        VALUES (
            @i_correo,
            @i_password,
            @i_rolId
        );

        SELECT * FROM
        SEGURIDAD.USUARIOS
        WHERE usuario_id = SCOPE_IDENTITY();

        COMMIT TRAN;

    END TRY
    BEGIN CATCH
        IF @@TRANCOUNT > 0
            ROLLBACK TRAN;

        -- Relanza el error original manteniendo código, mensaje y número de línea
        THROW;
    END CATCH;
END;
GO

EXEC SEGURIDAD.USP_REGISTRAR_USUARIO 'massiditor@gmail.com','mipassword123';