
export default function Slots({val1, val2, val3}){
    const isWinner = val1 == val2 && val1 == val3
    const result = isWinner ? "You Win!" : "You Lose :("
    const style = isWinner ? {color : "green"} :  {color : "red"}
    return(
        <>
            {/* <h1> inside slots</h1> */}
            <h1>{val1} {val2} {val3}</h1>
            <h3 style={style}>{result}</h3>
            {isWinner && <h3>Congrats!!</h3>}
        </>
    )
}