
  //Abrir http (método,url)

  // CRUD   - Métodos HTTP
  // Create - POST
  // Read   - GET
  // Update - PUT/PATCH
  // Delete - DELETE

const listaClientes = () => {
    const promise = new Promise((resolve, reject) => {
    const http = new XMLHttpRequest();
    http.open("GET", "http://localhost:3000/perfiles");

    http.send();

    http.onload = () => {
        const response = JSON.parse(http.response);
        if (http.status >= 400) {
            reject(response);
        } else {
            resolve(response);
        }
    };
    });
    return promise;
};

FileLististaClientes()
    .then((data) => {
        data.forEach((perfil) => {
        const nuevaLinea = crearNuevaLinea(perfil.nombre, perfil.email);
        table.appendChild(nuevaLinea);
    });
    })
    .catch((error) => alert("Ocurrió un error"));

  // console.log(data);
  //