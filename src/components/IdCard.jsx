function IdCard({ image, firstName, lastName, gender, height, birth }) {
    return (

        <div className="card mb-3 w-50 mx-auto">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={image} className="img-fluid rounded-start" alt="avatar" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">ID</h5>
                        <p className="card-text">First name: {firstName}</p>
                        <p className="card-text">Last name: {lastName}</p>
                        <p className="card-text">Gender: {gender}</p>
                        <p className="card-text">Height: {height}</p>
                        <p className="card-text">Birth: {birth}</p>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default IdCard