export function IntroPlate({time}) {
    return (
        <>
        <h1 className="header">Fridge Management System</h1>
        <p className="clock">Time: {time.toLocaleTimeString()} </p>
        <p className="clock">Date: {time.getMonth()} {time.getDate()}, {time.getFullYear()}</p>
        </>
    )
}