import './Timetrackingboard.css'
import Timetrackingactivities from '../Timetrackingactivities/Timetrackingactivities'

import iconwork from '../../assets/icon-work.svg'
import iconellipsis from '../../assets/icon-ellipsis.svg'
import iconplay from '../../assets/icon-play.svg'
import iconstudy from '../../assets/icon-study.svg'
import iconexercise from '../../assets/icon-exercise.svg'
import iconsocial from '../../assets/icon-social.svg'
import iconselfcare from '../../assets/icon-self-care.svg'


function Timetrackingboard () {

    const arrayofobjects = [
        {
    iconActivity:iconwork,
    selectionColor:'hsl(15, 100%, 70%)',
    ActivityName:'Work',
    iconellipsis:iconellipsis,
    Numberhrs:'32hrs',
    Comments:'Last Week - 36hrs',
    uniqueID:1,
        },
        {
    iconActivity:iconplay,
    selectionColor:'hsl(348, 100%, 68%)',
    ActivityName:'Play',
    iconellipsis:iconellipsis,
    Numberhrs:'10hrs',
    Comments:'Last Week - 8hrs',
    uniqueID:2,
        },
        {
    iconActivity:iconstudy,
    selectionColor:'hsl(195, 74%, 62%)',
    ActivityName:'Study',
    iconellipsis:iconellipsis,
    Numberhrs:'4hrs',
    Comments:'Last Week - 7hrs',
    uniqueID:3,
        },
        {
    iconActivity:iconexercise,
    selectionColor:'hsl(145, 58%, 55%)',
    ActivityName:'Exercise',
    iconellipsis:iconellipsis,
    Numberhrs:'4hrs',
    Comments:'Last Week - 5hrs',
    uniqueID:4,
        },
        {
    iconActivity:iconsocial,
    selectionColor:'hsl(264, 64%, 52%)',
    ActivityName:'Social',
    iconellipsis:iconellipsis,
    Numberhrs:'5hrs',
    Comments:'Last Week - 10hrs',
    uniqueID:5,
        },
{
    iconActivity:iconselfcare,
    selectionColor:'hsl(43, 84%, 65%)',
    ActivityName:'Self Care',
    iconellipsis:iconellipsis,
    Numberhrs:'2hrs',
    Comments:'Last Week - 2hrs',
    uniqueID:6,
},
    ]

    return(
<div id='Timetrackingboarddiv'>
{arrayofobjects.length > 0 ?(
             arrayofobjects.map ((item) => {
    return(
<Timetrackingactivities
key={item.uniqueID}
iconActivity={item.iconActivity}
selectionColor={item.selectionColor}
ActivityName={item.ActivityName}
iconellipsis={item.iconellipsis}
Numberhrs={item.Numberhrs}
Comments={item.Comments}
></Timetrackingactivities>);
})
            ) :
        (<h>The array is empty</h>)
        };
            
        </div>
    ) ;
};

export default Timetrackingboard ;