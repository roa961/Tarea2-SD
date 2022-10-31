Tarea 2 SD
# Registro carrito

Metodo POST

localhost:8005/api/registrar

{
    "nombre": "12453342",
    "apellido": "Romuf2fld",
    "rut": "52",
    "correo": "12.30",
    "patente": "10",
    "premium" : true

}
# Venta 

Metodo POST

localhost:8005/api/venta

{
    "patente": "12453342",
    "cliente": "Romuf2fld",
    "n_sopaipillas": "52",
    "hora": "12.30",
    "stock_restante": "10",
    "ubicacion" : "747385"

}

# Ventas diarias
Metodo GET 

localhost:8012/api/ventas-diarias

# Coordenadas

Metodo POST

localhost:8005/api/coordenadas

{
    "id": "12453342",
    "coordenadas": "Romuf2fld",
    "denuncia": "0"

}

# Stock

Metodo POST

localhost:8005/api/stock

{
    "stock" : "10"

}