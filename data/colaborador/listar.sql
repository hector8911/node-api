SELECT  c.id, c.nombreColaborador, c.tarifa,r.descripcion 
FROM colaborador c 
left JOIN rol r on r.id = c.idRol
WHERE c.idRol != 3;