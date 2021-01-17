
/* 
Para usar jsonPlaceholder como una API REST falsa para simular el funcionamiento de una BD,
lo primero que debemos de tener es nodejs, por tanto, habrá que seguir los pasos:
1) Visitar nodejs.org y descargar la versión que deseemmos o necesitemos
2) Instalar nodejs que hemos descargado
3) Podemos comprobar si se ha instalado bien desde el terminal de windows o del de Visual Studio Code con node -v 
4) Entrar en la página jsonPlaceholder que es la API que vamos a usar y enlazar con json-serve
5) Acceder y abajo viene como instalar json-serve para poder simular la API REST
6) Comando de instalación con el gestor de paquetes npm de nodejs: npm install -g json-server
7) Descargar la versión core de insomnia para manejar la API Falsa ( https://insomnia.rest/download/)
8) Iniciar insomnia
9) Ejecutar desde un terminal de visual estudio code: json-server -w -p puerto json, donde puerto
    por defecto es el 3333, pero podemos elegir otro para evitar conflictos, ej. 5555,
    y donde json es el objeto json a usar
10) Realizar las peticiones y pruebas necesarias
*/



/* declaración de variables
$table para guardar la tabla con los resultados de la API Rest
$form para apuntar al formulario
$title para cambiar el título de la operación a realizar (Agregar Módulo, Editar Módulo, etc)
$template para guardar el contenido de la template para modificar el DOM, por eso utilizamos .content
$fragment para no realizar continuas inserciones al DOM
*/
const d = document,
            $table = d.querySelector(".crud-table"),
            $form = d.querySelector(".crud-form"),
            $title = d.querySelector(".crud-title"),
            $template = d.getElementById("crud-template").content,
            $fragment = d.createDocumentFragment();


/* función a la que le pasamos un objeto options válido al que le haremos 
destructuración, en dicha función va la estructura básica de cualquier petición,
encapsulando todo el código en la funcion ajax para luego llamarla*/
        const ajax = (options) => {
            /*destructuración del objeto donde cada variable almacenará los 
            datos del objeto con el mismo nombre, teniendo en cuenta que
            success y error van a ser funciones que se ejecutarán en caso de éxito
            o error */
            let {url,method,success,error,data} = options;
            //instanciamos el objeto HttpRequest (recordar 1º paso)
            const xhr = new XMLHttpRequest();

            //configuramos el evento con el listener (2º paso)
            /*validamos que la respuesta a la petición haya terminado y que el estado de la
            respuesta a la petición sea válida, con lo cual cuando se produzca el evento,
            se ejecutará la arrow function asociada al evento*/
            xhr.addEventListener("readystatechange", e => {
                if (xhr.readyState !== 4) return;

                if (xhr.status >= 200 && xhr.status < 300) {
                    // convertimos a formato json la respuesta.
                    let json = JSON.parse(xhr.responseText);
                    //ejecutamos la funcion success con el parámetro de la respuesta convertida a json
                    success(json);
                } else {
                    // operador de tipo OR por por si la propiedad statusText viene vacía
                    let message = xhr.statusText || "Ocurrió un error";
                    // ejecutamos la función error para mostrar el error producido
                    error(`Error ${xhr.status}: ${message}`);
                }
            });

            /* abrir la peticion (3º paso), en este caso le estamos diciendo además, 
            con un operado de tipo or que si el usuario no especifica el 
            método apliquemos GET por defecto*/
            xhr.open(method || "GET", url);
            /* añadir cabecera a la petición, ya que toda petición tiene cuerpo y cabecera
                En la cabecera se indica el tipo de contenido, en este caso, espera un objeto
                json, por eso se usa application/json, con el formato (atributo,valor)
                Si no hubiera cabecera el json-server no funcionaría, porque esperaría
                texto plano y daría error porque json-server manda un json en formato utf-8
             */
            xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
            // enviar la respuesta (4º paso)
            /* en este caso, vamos a enviar la información como cadena de texto, 
            para lo que usamos el método stringigy, es decir, hace lo contrario que el
            método json, con lo cual el parámetro data ya será un objeto javascript en
            formato de texto. Enviamos los datos con el parámetro data
             */
            xhr.send(JSON.stringify(data));
        }

        /* función para obtener todos los elementos del objeto json, que llamaremos
        al cargar el contenido del DOM (más abajo) */
        const getAll = () => {
            /*ejecutar la función ajax que servirá para cualquier petición, con sus parámetros:
            un objeto que en nuestro caso se llamaba options con :
            - método de acceso ( que en nuestro caso omitiremos porque ya le habíamos
                                dicho en la apertura de la petición con xhr.open(method || "GET", url)
                                que si omitíamos el método usáramos el método GET)
            - url de los datos a consultar
            - lo que queremos hacer en caso de éxito (en nuestro caso llamamos a la función success)
            - lo que queremso hacer en caso de error (en cuentro caso llamamos a la función error)
            - Los datos  a consultar, si queremos todos lo datos, podemos poner NULL 
                o simplemente omitirlos como haremos nosotros
            En definitiva, en este caso vamos a mandar solo en la función ajax tres parámetros,
            omitiendo los que no nos hacen falta:
                - url de los datos a consultar
                - función para implementar en caso de éxito
                - función para implementar en caso de error
             */

            ajax({
                //no es necesario el método, ya que por defecto coge GET
                //method:"GET",
                url: "http://localhost:5555/primero",
                success: (respuesta) => {
                    //console.log(respuesta);
                    /*recorremos cada uno de los elementos que trae la respuesta y los
                    mostramos mediante el template de html*/
                    respuesta.forEach(el => {
                        //insertamos el contenido del template
                        $template.querySelector(".modulo").textContent = el.modulo;
                        $template.querySelector(".profesor").textContent = el.profesor;
                        /* creamos un data-atribute (dataset) para asignarle los datos correspondientes
                        y así poder editar después el contenido de los registros en el formulario */
                        $template.querySelector(".edit").dataset.id = el.id;
                        $template.querySelector(".edit").dataset.modulo = el.modulo;
                        $template.querySelector(".edit").dataset.profesor= el.profesor;
                        $template.querySelector(".delete").dataset.id = el.id;
                        /*clonamos el nodo del template para que se quede en memoria con su
                        contenido incluido (por eso ponemos el parámetro a true,
                        porque false es para sin contenido)*/
                        let $clone = d.importNode($template, true);
                        //añadimos el hijo al fragmento
                        $fragment.appendChild($clone);
                    });
                    //agregamos el fragmento con todos los campos al cuerpo de la tabla
                    $table.querySelector("tbody").appendChild($fragment);
                },
                /* cuando se produzca un error, vamos a programar que aparezca un mensaje justo
                debajo de la tabla de los datos para lo que utilizaremos insertAdjacenHTML, y
                usamos arterend para que sea fuera de la tabla, es decir, una vez aue termine 
                la tabla
                */
                error: (err) => {
                    //console.log(err);
                    $table.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`);
                }//,
            /* como quiero todos los datos (registros), no tengo que especificar data, 
            o bien, elegir null */
            //data:null
            })
        }
/* ejecutar una función al cargar el documento, que llama a otra función (en este
    caso getAll para mostrar todos los datos
*/
        d.addEventListener("DOMContentLoaded", getAll);
//evento pra detectar envío de los datos de formulario 
        d.addEventListener("submit", e => {
            //preguntamos si es el formulario quien origina el evento
            if (e.target === $form) {
                //detener la ejecución del botón, porque el procesamiento se hará por ajax
                e.preventDefault();
                /*si el value del elemento oculto del formulario es vacío ejecutaremos
                    la acción de crear, mientras que si trae un id haremos la función 
                    de editar con ese id 
                    */
                if (!e.target.id.value) {
                    //Creación de nuevo módulo con la función ajax  mediante el método POST
                    ajax({
                        url: "http://localhost:5555/primero",
                        method: "POST",
                        //cuando la petición sea exitosa, recargamos el navegador para mostrar el alta
                        success: (respuesta) => location.reload(),
                        // en caso de error insertamos el mensaje de error detrás de la tabla
                        error: (err) => $form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`),
                        /* datos del formulario enviados para el alta del módulo en la petición ajax.
                            Nota:  No tenemos que mandar ningun id porque json-server lo hace 
                            automáticamente como un autoincrementon*/
                        data: {
                            modulo: e.target.modulo.value,
                            profesor: e.target.profesor.value
                        }
                    });
                } else {
                    //Ejecución de la función ajax para actualizar con el método PUT
                    ajax({
                        /*en la url le pasamos el id del campo oculto del formulario, 
                        en el que cargamos antes en el dataset el id a tratar */
                        url: `http://localhost:5555/primero/${e.target.id.value}`,
                        method: "PUT",
                        //recargamos después de la actualización
                        success: (respuesta) => location.reload(),
                        error: (err) => $form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`),
                        data: {
                            modulo: e.target.modulo.value,
                            profesor: e.target.profesor.value
                        }
                    });
                }
            }
        });

        /* evento click para cada uno de los botones de editar y eliminarm(delegación de eventos)*/
        d.addEventListener("click", e => {
            /*Si el origen del click es el botón editar, cargamos los datos 
            en el formulario, para ello preguntamos si el origen coincide con la clase .edit*/
            if (e.target.matches(".edit")) {
                $title.textContent = "Editar Módulo de primero";
                $form.modulo.value = e.target.dataset.modulo;
                $form.profesor.value = e.target.dataset.profesor;
                $form.id.value = e.target.dataset.id;
            }
        /*Si el origen del click es el botón editar, cargamos los datos 
    en el formulario, para ello preguntamos si el origen coincide con la clase .delete*/
            if (e.target.matches(".delete")) {
                //preguntamos si realmene se desea eliminar el registro
                let isDelete = confirm(`¿Estás seguro de eliminar el ${e.target.dataset.id}?`);

                if (isDelete) {
                    //Delete - DELETE
                    ajax({
                        url: `http://localhost:5555/primero/${e.target.dataset.id}`,
                        method: "DELETE",
                        success: (respuesta) => location.reload(),
                        error: (err) => alert(err)
                    });
                }
            }
        })