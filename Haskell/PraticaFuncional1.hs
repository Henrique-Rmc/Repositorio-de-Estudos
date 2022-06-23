import Text.Printf


consumo :: Float -> Float -> Float
consumo a b = (a / 1000) * b

gastoDiario :: Float -> Float -> Float
gastoDiario a b = a * b

main = do
    input1 <- getLine
    input2 <- getLine
    input3 <- getLine

    let
        num1 = read input1  
        num2 = read input2  
        num3 = read input3  
       

        consumoFinal = consumo num1 num2

        gastoDiario = consumoFinal * num2

    printf "consumo = %.2fkwh\n" consumoFinal
    printf "consumo = %.2fkwh\n" gastoDiario
  

