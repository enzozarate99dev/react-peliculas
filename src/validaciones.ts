import * as Yup from 'yup'

export default function configValidaciones(){
    Yup.addMethod(Yup.string, 'primeraLetraMayuscula', function(){
        return this.test('primera-letra-mayuscula', 'La primer letra debe ser mayusucula', 
        function(palabra){
            if (palabra && palabra.length > 0){
                const primerLetra = palabra.substring(0,1)
                return primerLetra === palabra.toUpperCase()
            }
            return true
        })
    })
}