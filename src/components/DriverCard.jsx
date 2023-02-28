import Rating from "./Rating"

function DriverCard({ name, rating, img, car: { model, licensePlate } }) {



    return (
        <div className="card mb-3 w-50 mx-auto">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={img} className="img-fluid rounded-start" alt="avatar" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <p className="card-text">{name}</p>
                        <p className="card-text">
                            <Rating>
                                {rating}
                            </Rating>
                        </p>
                        <p className="card-text">{model}</p>
                        <p className="card-text">{licensePlate}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DriverCard