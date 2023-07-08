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

const user = {
    name: 'Harry Potter',
    imageUrl: '',
    imageSize: 90,
};

function ProfileCard() {
    return (
        <>
            <h1>{user.name}</h1>
        </>
    )
}


export {MyButton, Lines, ProfileCard};
export default ComplexButton;