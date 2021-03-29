import React, { useState, useEffect } from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { FaQuoteRight } from 'react-icons/fa'

import data from '../data'

const Home = () => {
  const [reviews, setReviews] = useState(data)
  const [currIndex, setCurrIndex] = useState(0)

  const nextReview = () => {
    const lastIndex = reviews.length - 1
    currIndex + 1 > lastIndex ? setCurrIndex(0) : setCurrIndex(currIndex + 1)
  }

  const prevReview = () => {
    const lastIndex = reviews.length - 1
    currIndex - 1 < 0 ? setCurrIndex(lastIndex) : setCurrIndex(currIndex - 1)
  }

  useEffect(() => {}, [])

  return (
    <>
      <h2 className='title'>/ Reviews</h2>
      <section className='slider'>
        <button className='btn' onClick={() => prevReview()}>
          <BsChevronLeft />
        </button>
        {reviews.map((review, index) => {
          const { id, image, name, title, quote } = review

          let position = 'next-slide'
          if (index === currIndex) position = 'active-slide'
          else if (
            index === currIndex - 1 ||
            (currIndex === 0 && index === reviews.length - 1)
          )
            position = 'prev-slide'

          return (
            <article className={`review-content ${position}`} key={id}>
              <img src={image} alt='' />
              <h3>{name}</h3>
              <p>{title}</p>
              <p>{quote}</p>
            </article>
          )
        })}
        <button className='btn' onClick={() => nextReview()}>
          <BsChevronRight />
        </button>
      </section>
    </>
  )
}

export default Home
