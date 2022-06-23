somaMusicas :: Int -> Int -> Int -> IO()
somaMusicas 0 soma tempoTotal = print soma


somaMusicas qtdMusicas soma tempoTotal = do
    input1 <- getLine
    let segundosMusica = read input1 :: Int

    if(tempoTotal - segundosMusica) >= 0 
        then somaMusicas (qtdMusicas - 1) (soma + 1 ) (tempoTotal - segundosMusica ) 
  
    else somaMusicas 0 soma (tempoTotal - segundosMusica ) 

main  = do

    inputx <- getLine

    let musicas = read inputx :: Int



    somaMusicas  musicas 0 2160   