SELECT v.fecha, v.tarifa, dv.distancia, c2.nombreColaborador FROM viaje v 
JOIN detalleViaje dv ON v.id = dv.idViaje 
JOIN colaborador c2 ON c2.id = dv.idColaborador
WHERE v.fecha BETWEEN @fechai and @fechaf 
and v.idTransportista = @idTransportista;