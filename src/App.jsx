
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {
  console.log('1')
  const [books, setBooks] = useState(null);
  const [filteredBooks, setFilteredBooks] = useState(null);

  useEffect(()=> {
    console.log('2')
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setBooks(data),
      setFilteredBooks(data)
    })
  }, [])

  function filterFunc(e){
    console.log('3')
    console.log('before:' + books.length);
    let inputValue = e.target.value.toLowerCase();
    if(!inputValue){
      setFilteredBooks(books);
    }else{
      let filteredArr = books.filter(book =>  book.name.toLowerCase().includes(inputValue));
      setFilteredBooks(filteredArr)
    }
    console.log('after:' + books.length)
  }

  return (
  
    <>
    <input type="search" placeholder='enter book name' onChange={filterFunc} />
    {
    console.log('4')
    }
    {
      filteredBooks && filteredBooks.map(book => (
        <div key={book.id} >
          <h3>{book.name}</h3>
        </div>
      ))
    }
    </>
  )
}

export default App
