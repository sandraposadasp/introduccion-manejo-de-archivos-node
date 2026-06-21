const fs = require('fs');

const filePath = './notas.json';

function agregarNota(titulo, contenido) {
  let notas = [];
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf8');
    notas = JSON.parse(data); 
  }

const nuevaNota = { titulo, contenido };
  notas.push(nuevaNota);
  fs.writeFileSync(filePath, JSON.stringify(notas, null, 2));
  console.log('Nota agregada con éxito.');
}

function listarNotas() {
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf8');
    const notas = JSON.parse(data);
    console.log(notas); 
  } else {
    console.log('No hay notas guardadas.');
  }
}