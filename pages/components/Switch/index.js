import Switch from 'react-switch'
import { useState } from 'react'

export default () => {
    const [first, setFirst] = useState(false)
    function handle(params) {
        setFirst(params)
        console.log(params)
    }
    return (
        <div className='mt-10'>
            <Switch

                onChange={e => handle(e)}
                checked={first}
                onColor="#86d3ff"
                // onHandleColor="#2693e6"  
                // handleDiameter={28} 
                uncheckedIcon={false}
                checkedIcon={false}
                // height={20}
                // width={48}
            >
            </Switch>
        </div>
    )
}