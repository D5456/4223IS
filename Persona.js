class Persona{
nombre;
Apellidos;
Fecha_Nacimiento;
#Correo;
/**
 * 
 * @param {string} correo
 */
Actualizar_correo = function(correo){
    this.#Correo = Correo;
}
/**
 * 
 * @returns {int}
 */
calcular_edad = function(){
    let fecha_actual = new Date();
    let fecha_Nacimiento =new Date(this.Fecha_Nacimiento);
    let edad = fecha_actual.getFullYear() - fecha_Nacimiento.getFullYear();
    let mes = fecha_actual.getMonth() - fecha_Nacimiento.getMonth();
    if(mes < 0 || (mes === 0 && fecha_actual.getDate() < fecha_Nacimiento.getDate())){
        edad --;
    }
    return parseInt(edad);
}








}