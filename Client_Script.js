api.controller = function($scope, spUtil) {
    var c = this;

    // Los productos que pasan desde el server script se almacenan en 'productos'
    $scope.productos = c.data.productos;

    // Opcional: debug para asegurarse de que los productos están siendo pasados correctamente
    console.log($scope.productos);
};
