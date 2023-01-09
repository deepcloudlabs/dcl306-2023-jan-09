export default class Move {
    #_guess;
    #_perfectMatch;
    #_partialMatch;
    #_message;
    constructor(guess,secret) {
        this.#_guess = guess;
        this.#_perfectMatch = 0;
        this.#_partialMatch = 0;
        this.#_message = "No Match";
        this.evaluateMove(guess,secret);
    }

    evaluateMove = (guess,secret) => {
        const guessAsString = guess.toString();
        const secretAsString = secret.toString();
        for (let i=0;i<guessAsString.length;++i){
            const g = guessAsString.charAt(i);
            for (let j=0;j<secretAsString.length;++j){
                const s = secretAsString.charAt(j);
                if (s === g){
                    if (i===j){
                        this.#_perfectMatch++;
                    } else {
                        this.#_partialMatch++;
                    }
                }
            }
        }
        if (this.#_perfectMatch === 0 && this.#_partialMatch === 0)
            return;
        this.#_message = "";
        if (this.#_partialMatch>0){
            this.#_message = `-${this.#_partialMatch}`;
        }
        if (this.#_perfectMatch>0){
            this.#_message += `+${this.#_perfectMatch}`;
        }
    }

    //region getters
    get guess(){
        return this.#_guess;
    }
    get perfectMatch(){
        return this.#_perfectMatch;
    }
    get partialMatch(){
        return this.#_partialMatch;
    }
    get message(){
        return this.#_message;
    }
    //endregion
}