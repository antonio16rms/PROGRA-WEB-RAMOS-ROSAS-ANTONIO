document.getElementById('formularioFutbolista').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que el formulario se envíe y la página se recargue
  
    // Obtener los valores de los campos
    const nombre = document.getElementById('nombre').value;
    const sueldoAnual = parseFloat(document.getElementById('sueldoAnual').value);
    const sueldoMensual = (sueldoAnual / 12).toFixed(2);
    const pais = document.getElementById('pais').value;
    const continente = document.getElementById('continente').value;
    const url = document.getElementById('url').value;
  
    // Validar la URL (debe comenzar con http:// o https://)
    const urlPattern = /^(https?:\/\/)/i;
    const errorUrl = document.getElementById('error-url');
    
    if (!urlPattern.test(url)) {
      document.getElementById('url').classList.add('error');
      errorUrl.classList.remove('error-oculto');
      errorUrl.classList.add('error-visible');
      return; // Detener el proceso si la URL es incorrecta
    } else {
      document.getElementById('url').classList.remove('error');
      errorUrl.classList.remove('error-visible');
      errorUrl.classList.add('error-oculto');
    }
  
    // Crear una nueva fila para la tabla
    const tabla = document.getElementById('tablaFutbolistas').querySelector('tbody');
    const nuevaFila = document.createElement('tr');
  
    // Insertar las celdas con los datos
    nuevaFila.innerHTML = `
      <td>${nombre}</td>
      <td>$${sueldoAnual.toFixed(2)}</td>
      <td>$${sueldoMensual}</td>
      <td>${pais}</td>
      <td>${continente}</td>
      <td><a href="${url}" target="_blank">Visitar Página</a></td>
    `;
  
    // Añadir la nueva fila a la tabla
    tabla.appendChild(nuevaFila);
  
    // Limpiar los campos del formulario
    document.getElementById('formularioFutbolista').reset();
  });