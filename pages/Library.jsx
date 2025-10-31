import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useContext } from 'react';
import { LibraryContext } from './LibraryContext';

export default function Library(){
    const { library, removeFromLibrary } = useContext(LibraryContext)

    const handleRemove = (book) =>{
        removeFromLibrary(book)
    }

    return(
        <>
        <div className='grow m-2.5'>
            <h1 className='text-3xl font-medium text-green-900 flex text-center cursor-pointer'>Favorites</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4'>
            {library.map((book) =>(
                <div key={book.key} className='flex flex-col justify-between rounded mb-2.5 gap-2 border-gray-200 bg-zinc-200 shadow-lg hover:shadow-xl transition-shadow duration-300 p-4'>
                    <img className='rounded mb-2' src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`} alt={book.title} />
                    <p className='text-lg font-medium text-black' >{book.title}</p>
                    <p className='text-sm text-gray-600 p-2.5'>Author: {book.author_name}</p>
                    <button onClick={()=>handleRemove(book)} className='text-sm bg-gray-500 text-zinc-200 rounded p-2.5'>Remove from Favorites</button>
                </div>
            ))}
        </div>
        </div>
        </>
    )
}