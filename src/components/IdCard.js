function IdCard ({ lastName, firstName, gender, height, birth, picture })
{

    return(
        <div className="IdCard">
            <img className="picture" src={picture} alt=""/>
            <div className="idTextBox">
                <p><strong>LastName:</strong> {lastName}</p>
                <p><strong>Gender:</strong> {gender}</p>
                <p><strong>Height:</strong> {height}</p>
                <p><strong>Birthday:</strong> {birth.toDateString()}</p>
                <p><strong>Name:</strong> {firstName}</p>
            </div>
        </div>
    )
}

export default IdCard