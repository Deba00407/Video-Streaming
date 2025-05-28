import { useParams } from 'react-router-dom'

export const Room = () => {
   const {name} = useParams()

    return (
        <div className='text-white'>Hello {name}</div>
    )
}