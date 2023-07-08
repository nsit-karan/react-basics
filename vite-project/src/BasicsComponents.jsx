function MyButton() {
    return (
        <button>A new button!!</button>
    )
}

function ComplexButton() {
    return (
        <div>
            <h1>Composite Button !!</h1>
            <MyButton></MyButton>
        </div>
    )
}

function Lines() {
    return (
        <div>
            <br />
            ------------------------
            <br />
        </div>
    )
}

export {MyButton, Lines};
export default ComplexButton;