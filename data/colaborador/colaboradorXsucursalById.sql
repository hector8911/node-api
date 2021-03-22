SELECT cx.idColaborador, c2.nombreColaborador, cx.idSucursal, cx.distancia, s2.nombreSucursal 
FROM sucursal s2 
JOIN colaboradorXsucursal cx on cx.idSucursal = s2.id 
JOIN colaborador c2 ON c2.id = cx.idColaborador 
WHERE cx.idColaborador = @idColaborador and cx.idSucursal = @idSucursal;