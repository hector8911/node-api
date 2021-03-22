SELECT c.nombreColaborador, r.descripcion as rol  FROM colaborador c
join rol r on r.id = c.idRol 
where c.usuario = @us and c.password = @pass;