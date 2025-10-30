import { Link } from 'react-router-dom';

export default function Navbar(){
    return(
        <div>
            <nav className='text-3xl w-full bg-gray-800'>
                <div className='text-zinc-200 cursor-pointer flex justify-between items-center mr-2'>
                <Link to='/'>
                <h1 className='p-2.5 font-sans cursor-pointer hover:text-amber-200 transform font-bold Text-4xl text-zinc-100'>Book Club</h1>
                </Link>
                <Link to='/Library' className='text-2xl hover:underline hover:text-amber-200'>Favorites</Link>
                </div>
            </nav>
        </div>
    )
}