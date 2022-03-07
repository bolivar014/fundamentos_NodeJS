// Variable nombre - Enviada entorno externo al archivo actual
//EJM EJECUCIÓN VARIABLES ENTORNO: 

    // Operador en caso que NOMBRE llegue vació, muestra "sin nombre"
    let nombre = process.env.NOMBRE || 'Sin nombre';
    let web = process.env.WEB || 'Sin sitio web';

    console.log('Hola: ' + nombre);
    console.log('Mi sitio web, es:  ' + web);