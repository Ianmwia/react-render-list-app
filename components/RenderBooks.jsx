import { useState, useEffect } from 'react';
import axios from 'axios';

export default function RenderBooks(){
    //state management declarations
    const [books, setBooks] = useState([])
    //state management when loading
    const [loading, setLoading] = useState()

    const url = 'https://openlibrary.org/search.json?q=sci-fi&fields=key,title,author_name,cover_i'

    useEffect(()=> {
        const fetchBooks = async()=>{
            try {
                const response = await axios.get(url)
                setBooks(response.data.docs)
                console.log(response.data)
            } catch (error) {
                console.error('Fetch Failed', error)
            }finally{
                setLoading(false)
            }
            
        }
        fetchBooks()
    },[])
    if(loading){
        return (
            <p>Loading</p>
        )

    }
    return(
      <div className='m-2.5'>
        <h1 className='text-3xl text-green-900'>Books</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4'>
            {books.map((book) =>(
                <div key={book.key} className='flex flex-col justify-between rounded mb-2.5 gap-2 border-gray-200 bg-zinc-200 shadow-lg hover:shadow-xl transition-shadow duration-300 p-4'>
                    <img className='rounded mb-2' src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`} alt={book.title} />
                    <p className='text-lg font-medium text-black truncate' >{book.title}</p>
                    <p className='text-sm text-gray-600'>Author: {book.author_name}</p>
                </div>
            ))}
        </div>
      </div>
    )

}