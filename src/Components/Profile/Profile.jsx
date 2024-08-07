import './Profile.css'
import Imgjer from '../../assets/image-jeremy.png'

function Profile (){
    return(
<div id='profilinfo'>
    <div id='profilereport'>
    <img src={Imgjer} />
    <div>
    <h1>Report for</h1>
    <label>Jeremy Robson</label>
    </div>
    </div>
    <div id='Bottomdiv'>
<label>Daily</label>
<label>Weekly</label>
<label>Monthly</label>
    </div>



</div>
    )
}

export default Profile