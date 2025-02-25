function validar(form) { 
//  Validar nombre 
var nombre = form.nombre.value.trim();
 if (nombre === "") { alert("Por favor, ingrese su nombre."); 
    return false; } // Validar edad
     var edad = form.edad.value.trim(); if (edad === "" || isNaN(edad) || edad <= 0)
         { alert("Por favor, ingrese una edad válida."); return false; } 
     // Validar selección de sexo 
     var sexo = form.sexo.value; 
     if (sexo === "" || (sexo !== "masculino" && sexo !== "femenino")) 
     { alert("Por favor, seleccione su sexo."); return false; } 
     // Validar deporte favorito
     var deporte = form.deporte.value; 
     if (deporte === "ninguno"||(deporte !== "futbol" && deporte !== "basquetbol" && deporte !== "Tenis" && deporte !== "beisbol")) 
        { alert("Por favor, seleccione un deporte favorito."); return false; } if (contieneEtiquetaHTML(nombre)===true||contieneEtiquetaHTML(edad)===true||contieneEtiquetaHTML(sexo)===true||contieneEtiquetaHTML(deporte)===true) 
            { alert("Por favor, no intente ingresar etiquetas HTML al back."); sexo = null; deporte = null; edad = null; nombre = null; return false; } // Si todo es válido 
            return true; } 
            function contieneEtiquetaHTML(texto) { const regex = /<[^>]+>/; return regex.test(texto); }
