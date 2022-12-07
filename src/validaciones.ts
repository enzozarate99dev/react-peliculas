import * as Yup from 'yup'

export default function configValidaciones(){
    Yup.addMethod(Yup.string, 'primeraLetraMayuscula', function(){
        return this.test('primera-letra-mayuscula', 'La primer letra debe ser mayusucula', 
        function(valor){
            if (valor && valor.length > 0){
                const primerLetra = valor.substring(0,1);
                return primerLetra === primerLetra.toUpperCase()
            }
            return true;
        })
    })
}