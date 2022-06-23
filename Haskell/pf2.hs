check :: Int -> Int -> Int -> IO()
check 0 tot nMusic = print (nMusic)
check i tot nMusic = do
    input <- getLine
    let dMusic = read input :: Int
    if (tot + dMusic) > 2160
    then check (i -1) (tot + dMusic) nMusic
    else check (i - 1) (tot+ dMusic) (nMusic+1)


main = do
    m <- getLine
    let n = read m :: Int
    check n 0 0