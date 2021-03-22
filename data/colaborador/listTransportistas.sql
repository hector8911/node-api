SELECT  c.id, c.nombreColaborador, c.tarifa 
FROM colaborador c 
JOIN rol r on r.id = c.idRol
JOIN colaboradorXsucursal cx ON cx.idColaborador = c.id 
WHERE c.idRol = 3 AND cx.idSucursal = @idSucursal;