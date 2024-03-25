import './listitem.css'
import 'bootstrap/dist/css/bootstrap.css';


const HospitalListItem = props => {
    const {hospitalDetails} = props
    const {imageUrl, name, address,contact} = hospitalDetails
    return (
      <div className="place-card col-12 col-md-3">
        <h2>{name}</h2>
          <p >{address}</p>
          <p>{contact}</p>
        <img src={imageUrl} alt={name}  className="place-image" />
      </div>
    )
    
  }
  
  export default HospitalListItem
  