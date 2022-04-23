import React from "react"

const Brading = () => {
  const data = [
    {
      cover: "./images/b1.png",
    },
    {
      cover: "./images/b2.png",
    },
    {
      cover: "./images/b3.png",
    },
    {
      cover: "./images/b4.png",
    },
  ]
  return (
    <div>
      <section className='Brading'>
        <div className='container grid2'>
          {data.map((val) => {
            return (
              <div className='box'>
                <img src={val.cover} alt='' />
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default Brading
