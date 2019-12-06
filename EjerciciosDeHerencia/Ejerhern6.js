class Bebida {
    constructor(cantidad){
        this.cantidad = cantidad;
    }
    
    getCantidad(){
        return this.cantidad;
    }

    setCantidad(cantidad){
        this.cantidad = cantidad;
    }
}

class Cerveza extends Bebida {
    constructor(cantidad, porcentajeAlcohol){
        super(cantidad);
        this.porcentajeAlcohol = porcentajeAlcohol;
    }

    getPorcentajeAlcohol(){
        return this.porcentajeAlcohol;
    }

    setPorcentajeAlcohol(porcentaje){
        this.porcentajeAlcohol = porcentaje;
    }
}

class Refresco extends Bebida {
    constructor(cantidad, azucar) {
        super(cantidad);
        this.azucar = azucar;
    }

    getAzucar(){
        return this.azucar;
    }

    setAzucar(azucar){
        this.azucar = azucar;
    }
}