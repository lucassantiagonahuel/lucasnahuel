
function calcularEdad() {
    let fechaNacimiento=document.getElementById("fechaNacimiento").value
    let anoNacimiento=fechaNacimiento.substring(0,4)
    let mesNacimiento =fechaNacimiento.substring(5,7)
    let diaNacimiento =fechaNacimiento.substring(8,10)

    let fechaActual=new Date()
    let diaActual=fechaActual.getDate()
    let mesActual=fechaActual.getMonth()+1
    let anoActual=fechaActual.getFullYear()

    if (mesNacimiento>=mesActual){
        let calculoAno=calcularAño(anoNacimiento,anoActual)
        let calculoMes=calcularMesMayor(mesNacimiento,mesActual)
        document.write(`Usted tiene ${calculoAno-1} años, ${calculoMes} meses y ${diaActual} dias`)
    } else{
        let calculoAno=calcularAño(anoNacimiento,anoActual)
        let calculoMes=calcularMes(mesNacimiento,mesActual)
        document.write(`Usted tiene ${calculoAno} años, ${calculoMes} meses y ${diaActual} dias`)
    }
}

function calcularAño(anoNaci,anoActu) {
    let resultado= anoActu-anoNaci
    return resultado
}

function calcularMes(mesNaci,mesActu) {
    let resultado=mesActu-mesNaci
    return resultado
}

function calcularMesMayor(mesNaci,mesActu) {
    let meses=12
    let resultado=(meses - mesNaci)+mesActu
    return resultado
}

