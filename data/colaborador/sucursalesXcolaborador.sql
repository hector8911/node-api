SELECT cx.idColaborador, cx.idSucursal, cx.distancia, s2.nombreSucursal 
FROM sucursal s2 
JOIN colaboradorXsucursal cx on cx.idSucursal = s2.id 
WHERE cx.idColaborador = @idColaborador;