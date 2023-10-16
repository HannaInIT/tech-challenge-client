import { Link } from "react-router-dom"


function MyNavbar({phonesList}) {

return (
    <MyNavbar>
   
            <Link to={"/"}>Home</Link>

                {phonesList.map((eachPhone) => {

                    return (
                        <Link to={`/phone-details/${eachPhone.id}`} key={eachPhone.id} >
                            {eachPhone.name}
                        </Link>
                    )
                })}                       
           
      
    </MyNavbar>
)
}

export default MyNavbar