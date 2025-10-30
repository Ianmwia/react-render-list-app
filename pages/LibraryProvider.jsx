import { useState } from 'react'
import { LibraryContext } from './LibraryContext'

export default function LibraryProvider({children}){
    const [library, setLibrary] = useState([])

    const addToLibrary  = (book) => {
        if(!library.find(b => b.key === book.key)){
            setLibrary([...library, book])
        }
    }
    return(
        <LibraryContext.Provider value = {{library, addToLibrary}}>
            {children}
        </LibraryContext.Provider>
    )
}