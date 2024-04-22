const crearNuevaLinea = (nombre, email) => {
    const linea = document.createElement("tr");
    const contenido = `
    <td class="td" data-td>
        ${nombre}
    </td>
    <td>${email}</td>
    <td>
        <ul class="table__button-control">
        <li>
            <a
            href="../screens/editar_cliente.html"
            class="simple-button simple-button--edit">
            Editar
            </a>
        </li>
        <li>
            <button class="simple-button simple-button--delete" type="button">
            Eliminar
            </button>
        </li>
        </ul>
    </td>
    `;
    linea.innerHTML = contenido;
    return linea;
};

const table = document.querySelector("[data-table]");

const listaClientes = () => {
    const promise = new Promise((resolve, reject) => {
        //instanciando un http
        const http = new XMLHttpRequest();
        //recibe dos parametros el método get y una url
        http.open("GET", "http://localhost:3000/perfil");
        //envia la peticion al servidor de la url 
        http.send();
        //recibe la respuesta y ejecuta la función
        http.onload = () => {
            const response = JSON.parse(http.response);
            //console.log(response);
            if(http.status >= 400){
                reject(response)
                //Nuestra respuesta se convierte en data
            }else{
                resolve(response)
                //Nuestra respuesta se convierte en data
            }
        };
    })
    return promise;
}
                    //esta data  
listaClientes().then((data) => {
    console.log(data);
    data.forEach((perfil) => {
        const nuevaLinea = crearNuevaLinea(perfil.nombre, perfil.email);
        table.appendChild(nuevaLinea);
    });
}).catch((error) => alert("Ocurrió un error"));


