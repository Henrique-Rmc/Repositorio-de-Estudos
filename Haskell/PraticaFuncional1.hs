import Text.Printf


consumo :: Float -> Float -> Float
consumo a b = (a / 1000) * b

gastoDiario :: Float -> Float -> Float
gastoDiario a b = a * b



main :: IO()
main = do
    input1 <- getLine
    let num1 = read input1

    input2 <- getLine
    let num2 = read input2

    input3 <- getLine
    let num3 = read input3

    let consumoFinal = consumo num1 num2

    let gastoDiario = consumoFinal * num3

    printf "consumo = %.2fkwh\n" consumoFinal
    printf "consumo = %.2fkwh\n" gastoDiario
  

