//Funcion que hace lacomunicación con el servidor y generar un json
const listaClientes = () => {
    //Usando fetch API | hace lo mismo de abajo |se puede usar sin los return, quitando las llaves
                                                                            //const listaClientes = () => fetch("http://localhost:3000/perfil").then((response) => response.json();
    return fetch("http://localhost:3000/perfil").then((response) => {
        return response.json();
    });

    /* const promise = new Promise((resolve, reject) => {
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
    return promise; */
};

export const clientServices = {
    listaClientes,
}