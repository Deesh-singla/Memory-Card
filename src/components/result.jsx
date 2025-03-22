export default function Result({ result, score }) {
    return (
        <div className="resultDiv">
            <div className="result-content" >
                <h2 className="result">{result}</h2>
                <img src={result == 'Game Over!' ? '.\\src\\assests\\gameOver.gif' : '.\\src\\assests\\youWin.gif'} alt="" />
                <p>your final score is <b>{score}</b></p>
                <p className="play-again-btn" onClick={() => window.location.reload(true)}>PLAY AGAIN</p>
            </div>
        </div>
    )
}