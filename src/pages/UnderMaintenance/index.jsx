import { Link } from 'react-router-dom'

const UnderMaintenance = () => {
    return (
        <div className='d-flex flex-column align-items-center justify-content-center'>
            <h1>Page is not found or still under maintenance. Come back here later!</h1>
            <Link to='/'>Back to Main page</Link>
        </div>
    )
}

export default UnderMaintenance