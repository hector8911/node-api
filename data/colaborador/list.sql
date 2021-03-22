SELECT c.id, c.nombreColaborador, cx.distancia 
FROM colaborador c 
JOIN colaboradorXsucursal cx ON cx.idColaborador = c.id
JOIN sucursal s ON s.id = cx.idSucursal 
WHERE cx.idSucursal = @idSucursal and c.idRol != 3;;