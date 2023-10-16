import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

function PhoneDetails({ phonesList }) {

    const [phoneDetails, setPhoneDetails] = useState(null)
    // const [fetchingDetails, setFetchingDetails] = useState(true)

    const { phoneId } = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        getPhoneDetails()
    }, [phoneId])

    const getPhoneDetails = async () => {
        setFetchingDetails(true)

        const phoneToRender = phonesList.find(eachPhone => eachPhone.id === Number(phoneId))

        // setTimeout(() => {
        //     if (!phoneToRender) {
        //         navigate("/not-found")
        //         return
        //     }
        //     setPhoneDetails(phoneToRender)
        //     setFetchingDetails(false)
        // }, 500)

    }

    if (fetchingDetails) {
        return <div>Loading...</div>
      }

    const {
        name,
        manufacturer,
        description,
        color,
        price,
        screen,
        processor,
        ram,
        imageFileName,
    } = phoneDetails

    return (
        <Card>
            <header>
                <img src={`/images/${imageFileName}`} alt="Phone" />
            </header>

            <h4>{name} by {manufacturer}</h4>
            <h4>{description}</h4>
            <h4>{color}</h4>
            <h4>{screen}</h4>
            <h4>Proc: {processor}. Ram: {ram}</h4>
            <h4>tarting from: {price}€</h4>
            <Link to="/">Go back</Link>
        </Card>
    )
}

export default PhoneDetails