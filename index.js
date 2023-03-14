const nombre = "Marcos";

const apellido = "Berta";

const sobreNombre = "Cabezon";

const vinoPreferido = "Casildero del Diablo";

const trabajo = "Policía";

const deseo = "Ser developer"

const estudiante = `${nombre} ${apellido}`;

const estudianteMayus = estudiante.toUpperCase();

const estudianteMinus = estudiante.toLowerCase();

const cantidadLetras = estudiante.length;

const primeraNombre = nombre.charAt(0);

const ultimaApellido = apellido.slice(-1);

const estudianteOutSpaces = estudiante.replace(/ /g ,"");

const esta = estudiante.includes(nombre);
