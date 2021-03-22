BEGIN TRY
    UPDATE colaboradorXsucursal 
	SET idSucursal = @newidSucursal,
	    distancia = @distancia
	WHERE idColaborador = @idColaborador and idSucursal = @idSucursal;
	SELECT 1 AS message;
END TRY
BEGIN CATCH
    SELECT 0 AS message;
END CATCH;
