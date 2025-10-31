import { useState } from 'react'
import { LibraryContext } from './LibraryContext'

export default function LibraryProvider({children}){
    const [library, setLibrary] = useState([])

    const addToLibrary  = (book) => {
        if(!library.find(b => b.key === book.key)){
            setLibrary([...library, book])
        }
    }
    const removeFromLibrary = (book) => {
        setLibrary(library.filter(b => b.key !== book.key))
    }
    return(
        <LibraryContext.Provider value = {{library, addToLibrary, removeFromLibrary}}>
            {children}
        </LibraryContext.Provider>
    )
}