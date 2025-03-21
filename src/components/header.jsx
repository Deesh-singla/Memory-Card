export default function Header({score}) {
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
                    <p><span>HIGH-SCORE:</span> <span>0</span></p>
                </div>
            </div>
        </div>
    )
}