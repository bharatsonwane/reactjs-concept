import React, {useEffect} from 'react'

function Child3(props) {   

    const handleClick = () => {
        const mangos = props.mangoNumber + 1
        props.provideProps(mangos)
    }

    return (
        <div>
            <button onClick={()=>{handleClick()}} >Pass props to parent</button>
        </div>
    )
}

export default Child3
