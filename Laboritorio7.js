var textToOperate = document.getElementById('ans')

function result()
{
    var valueText = textToOperate.value
    var number1
    var number2
    validateString(valueText)      
}

function validateString(cadena)
{
    if(cadena[0]=="+" || cadena[0]=="/" || cadena[0] == "-" || cadena[0] == "*")
    {
        textToOperate.value = "primer caracter no puede ser un símbolo "+cadena[0]
    }
    
    else if(cadena[cadena.length-1]=="+" || cadena[cadena.length-1]=="/" || cadena[cadena.length-1] == "-" || cadena[cadena.length-1] == "*" )
    {
        textToOperate.value = "El ultimo caracter no puede ser un símbolo"
    }

    else
    {
        for(i = 0; i < cadena.length;i++)
        {
            if(cadena[i]=="+" || cadena[i] == "-" || cadena[i] == "*")
            {
                if(cadena[i+1]=="+" || cadena[i+1]=="/" || cadena[i+1] == "-" || cadena[i+1] == "*")
                {
                    textToOperate.value = "los símbolos "+cadena[i]+" y "+cadena[i+1]+" no pueden ir seguidos"
                }    
            }
            else if(cadena[i]=="/")
            {
                if((cadena[i+1]=="0" && cadena[i+2]=="+") || (cadena[i+1]=="0" && cadena[i+2]=="/") || (cadena[i+1]=="0" && cadena[i+2] == "-") 
                || (cadena[i+1]=="0" && cadena[i+2] == "*") || cadena[cadena.length-1] == "0")
                {
                    textToOperate.value = "la divicion por 0 no esta definida"
                }
                else if(cadena[i+1]=="+" || cadena[i+1]=="/" || cadena[i+1] == "-" || cadena[i+1] == "*")
                {
                    textToOperate.value = "los símbolos "+cadena[i]+" y "+cadena[i+1]+" no pueden ir seguidos"
                }
            } 
        }
    }
    return 
}
