import React from 'react';
import { Link } from 'react-router-dom'


export default function ContinueButton(props) {

  /*  useEffect(() => {
        {console.log(props.findNextPageIndex(props.currentPage))}
      }, []);
*/
    let btn = () => {
        if (props.isLast) {
            return (
                <Link to="/result"><button className='continuar-button'>Send</button></Link>)

        } else {
            return (<button className='continuar-button' onClick={props.goToNextPage}>Siguiente</button>)
        }
    }


    return btn()
    }

