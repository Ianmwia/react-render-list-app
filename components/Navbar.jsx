import { Link } from 'react-router-dom';

export default function Navbar(){
    return(
        <div>
            <nav className='flex justify-between text-center text-3xl w-full bg-gray-800'>
                <h1 className='p-2.5 font-sans cursor-pointer hover:text-amber-200 transform font-bold Text-4xl text-zinc-100'>Book Club</h1>
                <div className='text-zinc-200 cursor-pointer flex items-center mr-2'>
                <Link to='/'></Link>
                <Link to='/Library' className='hover:underline hover:text-amber-200'>Favorites</Link>
                </div>
            </nav>
        </div>
    )
}