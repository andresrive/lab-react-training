function Rating({ children }) {

    return (
        <div >
            {children == 0 && <p><i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i></p>}

            {children <= 1 && <p><i className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i></p>}

            {children > 1 && children <= 2 && <p><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i></p>}

            {children > 2 && children <= 3 && <p><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i></p>}

            {children > 3 && children <= 4 && <p><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i></p>}

            {children > 4 && <p><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></p>}

        </div>
    )
}

export default Rating