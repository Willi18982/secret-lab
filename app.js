const { API_KEY } = process.env;

if (!API_KEY) {
  console.error("Falta API_KEY. Revisa tu archivo .env");
  process.exit(1);
}

function conectar() {
  console.log("Conectando con el servicio...");
}
conectar();
