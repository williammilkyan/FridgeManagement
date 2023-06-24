export function IntroPlate({time, clear}) {
    return (
        <>
        <h1 className="header">Fridge Management System</h1>
        <button onClick={clear}>Clear</button>
        <p className="clock">Time: {time.toLocaleTimeString()} </p>
        <p className="clock">Date: {time.getMonth()} {time.getDate()}, {time.getFullYear()}</p>
        </>
    )
}