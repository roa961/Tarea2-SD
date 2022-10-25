create table ventas (
    patente varchar(10),
    cliente varchar(100),
    n_sopaipillas int
);

select
    patente as patente_dueño,
    count(*) as total_ventas,
    avg(n_sopaipillas) as promedio_de_sopaipillas,
    count(distinct cliente) as clientes_totales
from
    ventas
group by
    patente;