import React from 'react';
import {AddBook} from '../components/AddBook'

export const AddBookPage: React.FC = () => {

  return (
    <>
    <h1 className="custom-header green-text"> Add a book </h1>
    <AddBook />
    </>
  )
}