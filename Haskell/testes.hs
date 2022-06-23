import Text.Printf

soma :: Int -> Int -> Int
soma x y = x+y

dobro :: Int -> Int
dobro x = x * 2


multiplica :: Int -> Int -> Int
multiplica x y = x * y

verificaPar :: Int-> Int
verificaPar x = if even x then 1 else 0

parimpar :: Int -> Bool
parimpar n | even n = True | otherwise = False

bmiTell :: Float -> Float -> String
bmiTell peso altura
    | bmi <= 18.5 = "Abaixo do Peso"
    | bmi <= 25.0 = "Regular"
    | otherwise = "OBESIDADE"
    where bmi = peso / (altura * altura)

sales :: Int -> Int
sales n = n

totalSales :: Int -> Int
totalSales 0 = sales 0
totalSales n = totalSales (n-1) + sales n 

fibo :: Int -> Int
fibo 0 = 0
fibo 1 = 1
fibo n = fibo(n - 1) + fibo (n - 2)

raiz2grau :: Float-> Float -> Float -> [Float]
raiz2grau a b c 
    | delta > 0 = [(b^2 - sqrt delta) / (2 * a) , (b^2 + sqrt delta) / (2 * a)] 
    | delta == 0 = [-b / (2 * a)]
    | otherwise = []
    where delta = b^2 - 4 * a * c



consumo :: Float -> Float -> Float -> Float
consumo potencia tempo kw =  consumo * kw + tempo

    where consumo = (potencia / 100) * (tempo)

    printf"%.2f\n"("Gasto semanal = R$ " ++ (gasto(consumo(num1 num2) num3)))
    printf"%.2f\n" ("Gasto diário = R$ " ++ gastoDiario ((consumo (potencia tempo)) custo)  )

main :: IO ()
main  = putStrLn "hello, world"



lendoNentradas 0 = return []
lendoNentradas count = readLn >>= \p -> lendoNentradas (count -1 ) >>= \e -> return (p : e)



teste :: Int -> Bool
teste soma = if (soma) <= 2160 then True else False


comp :: (Eq a) => a -> [a] -> Bool
comp _ [] = False
comp e (x:xs) = (e == x) || (comp e xs)