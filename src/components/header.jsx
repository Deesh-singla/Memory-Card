export default function Header({ score }) {
    let hScore = localStorage.getItem('hScore');

    if (hScore === null) {
        hScore = 0;
    } else {
        hScore = parseInt(hScore, 10);
    }

    if (score > hScore) {
        hScore = score;
        localStorage.setItem('hScore', hScore);
    }
    return (
        <div id="header">
            <div className="appHeading">
                <img src=".\src\assests\pokeball.png" alt="pokeball" />
                <p><span style={{ color: "red" }}>Poke</span><span style={{ color: "white" }}>Memo</span></p>
            </div>
            <div className="stats">
                <div className="score">
                    <p><span>SCORE:</span> <span>{score}</span></p>
                </div>
                <div className="highScore">
                    <p><span>HIGH-SCORE:</span> <span>{hScore}</span></p>
                </div>
            </div>
        </div>
    )
}