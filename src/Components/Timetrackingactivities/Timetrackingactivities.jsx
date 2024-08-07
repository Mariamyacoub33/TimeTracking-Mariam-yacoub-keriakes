import './Timetrackingactivities.css'


function Timetrackingactivities (props) {
    return(
        <div className='backdiv'
        style={{backgroundColor:props.selectionColor}}
        >
<img src={props.iconActivity} />
<div className='frontdiv'>
<div className='topdiv'>
<label>{props.ActivityName}</label>
<img className='iconellipsis' src={props.iconellipsis} />
</div>
<div className='botdivNC'>
<h2>{props.Numberhrs}</h2>
<span>{props.Comments}</span>
</div>
</div>
        </div>
    )
}

export default Timetrackingactivities ;