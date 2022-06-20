lendoNentradas 0 = return []
lendoNentradas count = readLn >>= \p -> lendoNentradas (count -1 ) >>= \e -> return (p : e)


soma :: [Int] -> Int
soma [] = 0
soma (x:xs) = x + soma xs

teste :: Int -> Bool
teste soma = if (soma) <= 2160 then True else False

sub :: Int ->Int -> Int
sub e = e 

comp :: (Eq a) => a -> [a] -> Bool
comp _ [] = False
comp e (x:xs) = (e == x) || (comp e xs)

qtd :: Int -> Int -> [Int] -> Int
qtd e f (x:xs)
    |   _ [] = 0
    |   sub >= 0 qtd sub (f+1) xs
    |   otherwise = f
    where sub = e - x


main :: IO()
main  = do
    putStr "Numero de Entradas: "
    n <- readLn
    lista <- lendoNentradas n


    putStrLn $ "Total de carac: " ++ show (soma lista)
    
    putStrLn $ "teste " ++ show (teste n) 

    putStrLn $ "teste comparador " ++ show (comp 228 lista) 