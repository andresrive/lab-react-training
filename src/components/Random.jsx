function Random({ min, max }) {

    let randomNumber = Math.floor(Math.random() * (max - min)) + min

    return (
        <div className="border w-50 mx-auto">
            <p>Random value between {min} and {max} = {randomNumber}</p>
        </div>
    )
}

export default Random

