(function() {
    // Crear un array para almacenar los productos
    var productosData = [];

    // Crear un objeto RESTMessageV2 para hacer la solicitud
    var productosAPI = new sn_ws.RESTMessageV2();
    productosAPI.setHttpMethod('GET');
    productosAPI.setEndpoint('https://d3b6-190-83-98-214.ngrok-free.app/agricola'); // Actualiza la URL si es necesario

    try {
        var response = productosAPI.execute();
        var body = response.getBody();

        if (body) {
            try {
                var productos = JSON.parse(body);

                productos.forEach(function(producto) {
                    if (!producto.Foto) {
                        producto.Foto = null; // Imagen predeterminada si es necesario
                    }
                });

                // Pasar productos al Client Script
                data.productos = productos;
            } catch (e) {
                gs.error('Error al parsear la respuesta JSON: ' + e.message);
            }
        } else {
            gs.error('La respuesta de la API está vacía o no es válida');
        }
    } catch (e) {
        gs.error('Error al obtener productos desde la API: ' + e.message);
    }
})();
