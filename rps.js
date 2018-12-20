function computerPlay() {

    return getRandomPlay();

    function getRandomPlay() {
        let play = Math.floor(Math.random() * 3);
        if(play == 0)
            return "Rock";
        if(play == 1)
            return "Paper";
        return "Scissors";
    }
}