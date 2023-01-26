class Hipotenusa{
    #cat1;
    #cat2;
    asignarvalores=function(valor1,valor2){
        this.#cat1 = valor1;
        this.#cat2 = valor2;
        
    }
    calcular_Hipotenusa = function(){
        return parseFloat(Math.sqrt(Math.pow(this.#cat1, 2)+ Math.pow(this.#cat1, 2)+Math.pow(this.#cat2, 2)));
        
    }
}