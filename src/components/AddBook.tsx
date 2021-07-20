import React, { useState, } from 'react';
import { useHistory } from 'react-router-dom'
import { post } from '../server';
import { patch } from '../server';
import './AddBookStyle.scss'

interface TodoFormProps {
  title?: string,
  author?: string,
  category?: string,
  isbnNumber?: string,
  id?: string
}

export const AddBook: React.FC<TodoFormProps> = (props) => {

  const [title, setTitle] = useState(props ? props.title : '');
  const [author, setAuthor] = useState(props ? props.author : '');
  const [category, setCategory] = useState(props ? props.category : '');
  const [isbnNumber, setIsbnNumber] = useState(props ? props.isbnNumber: '');
  const history = useHistory()

  
const onInputTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

const onInputAuthor = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(event.target.value)
  }

const onSelectCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
  setCategory(event.target.value)
}

const onNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
  setIsbnNumber(event.target.value)
}

const submitHandler = (event: any) => {
  event.preventDefault()

  const newBook = {
    title: title,
    author: author,
    category: category,
    isbn: isbnNumber
  }

  if(Object.keys(props).length === 0) {
    post('/books', newBook);
    setTitle('');
    setAuthor('');
    setCategory('');
    setIsbnNumber('');
  }else {
    patch(`/books/${props.id}`, newBook);

    alert('Info was updated!')

    history.push('/')
  }
}

  return (
    <form
    className="form"
    onSubmit={submitHandler}
    >

      <input
        id="title"
        required
        type="text"
        value={title}
        onChange={onInputTitle}
        className="title"
        placeholder="Enter title of your book"
      />

      <input
        id="author"
        required
        type="text"
        value={author}
        onChange={onInputAuthor}
        className="author"
        placeholder="Enter author of your book"
      />

      <br />

      <label className="custom-label" htmlFor="category"> Book category </label>
        <select
        id="categoty"
        required
        className="browser-default category #2d3b36"
        value={category}
        onChange={onSelectCategory}
      >
        <option value="">
          Select a category
        </option>
        <option value="funny">
          Funny
        </option>
        <option value="horror">
          Horror
        </option>
        <option value="fantasy">
          Fantasy
        </option>
        <option value="detective">
          Detective
        </option>
      </select>

      <input
        id="isbn"
        required
        value={isbnNumber}
        onChange={onNumber}
        type="number"
        placeholder="Enter ISBN number"
        min="0"
      />

      <button
        className="btn"
        type="submit"
      > Add a book
      </button>

    </form>
  )
}