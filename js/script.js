const textArea = document.querySelector(".textarea");
const mensaje = document.querySelector(".mensaje");


// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";    
}

function encriptar(stringEncriptado) {
    if (!stringEncriptado.trim()) {
        alert('Debe ingresar un texto')        
        return '';
    }
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    mensaje.style.backgroundImage = "none";
    return stringEncriptado;
}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";    
}

function desencriptar(stringDesencriptado) {
    if (!stringDesencriptado.trim()) {
        alert('Debe ingresar un texto')
        return '';
    }
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptado.includes(matrizCodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
    mensaje.style.backgroundImage = "none";
    return stringDesencriptado;
}

function btnCopiar() {
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
}

function validarTexto(texto) {
    const regex = /^[a-zA-Z\s]*$/;
    return regex.test(texto);
}


textArea.addEventListener('input', () => {
    const esValido = validarTexto(textArea.value);
    if (!esValido) {
        alert('Debe ingresar solo letras minúsculas y sin acentos.');
        textArea.value = "";
    }    
});
