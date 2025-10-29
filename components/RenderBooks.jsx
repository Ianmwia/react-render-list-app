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
      <div>
        <h1 className='text-3xl text-green-900'>Books</h1>
        <div>
            {books.map((book) =>(
                <div key={book.key} className=''>
                    <p>{book.title}</p>
                    <p>{book.author_name}</p>
                </div>
            ))}
        </div>
      </div>
    )

}