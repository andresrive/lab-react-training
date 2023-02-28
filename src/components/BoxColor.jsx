function BoxColor({ r, g, b }) {

    const styles = {
        borderColor: "black",
        borderStyle: "solid",
        borderWeight: 2,
        height: 200,
        backgroundColor: `rgb(${r},${g},${b})`,
        color: "white",
    }

    return (
        <div className="w-50 mx-auto align-items-center" style={styles}>
            <p>rgb({r},{g},{b})</p>
        </div>
    )
}

export default BoxColor