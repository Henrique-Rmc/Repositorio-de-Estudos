import Text.Printf


dobro :: Int -> Int
dobro x = 2 * x


main = do
    input1 <- getLine

    let num1 = read input1 :: Int
  

    printf "%.d" (dobro num1)

  

