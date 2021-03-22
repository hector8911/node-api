INSERT INTO viaje(fecha, idTransportista, tarifa) VALUES(@fecha, @idTransportista, @tarifa);

select SCOPE_IDENTITY() as idViaje;