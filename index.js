const nom = process.argv[2] || "món";

function saluda(persona) {
  return `Hola, ${persona}!`;
}

console.log(saluda(nom));
