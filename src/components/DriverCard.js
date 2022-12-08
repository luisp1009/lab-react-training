import Rating from "./Rating"

function DriverCard ({name, rating, img, car:{model, licensePlate}}) {


    return(
    <div className="ratingCard" >
        <div className="driverInfo">
        <img className="imagesProfile" src={img} alt=''/>
            <h2 className="driverName">{name}</h2>
            <Rating>{rating}</Rating>
            <p className="licensePlate">{model} - {licensePlate}</p>
        </div>
    </div>
    )
}

export default DriverCard