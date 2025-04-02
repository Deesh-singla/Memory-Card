import youWin from "/youWin.gif"
import gameOver from "/gameOver.gif"
export default function Result({ result, score, resetState }) {
    return (
        <div className="resultDiv">
            <div className="result-content" >
                <h2 className="result">{result}</h2>
                <img src={result == 'Game Over!' ? gameOver : youWin} alt="" />
                <p>your final score is <b>{score}</b></p>
                <p className="play-again-btn" onClick={() => resetState()}>PLAY AGAIN</p>
            </div>
        </div>
    )
}