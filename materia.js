var materia1 =new Object;
materia1.cuatrimestre = 4;
materia1.unidad =2;
materia1.asignatura =" matematicas ";
materia1.profesor =" benito ";
materia1.apellido ="Camacho";
materia1.presentacion = function(){
    let texto = "es la materia de: "+ this.asignatura+""+this.cuatrimestre +" ,impartida por el profe  "+this.profesor +""+this.apellido+ ", con temas de la unidad "+ this.unidad;

    return texto;
}
materia1.presentacion2 =function(){
    let texto ="el profesor " + this.profesor + " es el mejor de "+ this.asignatura;
    return texto;
}