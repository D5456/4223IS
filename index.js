var alumno1= new Object;
alumno1.matricula = 1322134204;
alumno1.nombre = "Diego  ";
alumno1.apellidos = "Velazquez";
alumno1.anio_de_Nacimiento = 2004;
alumno1.presentacion = function(){
    let anios = 2023 - this.anio_nacimiento;
    let texto = "hola mi nombre es " + this.nombre + " " + this.apellidos + "y tengo" + anios + "años";
    return texto;
}   