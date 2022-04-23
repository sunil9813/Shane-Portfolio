import React from "react"

const Blog = () => {
  const data = [
    {
      id: 1,
      cover: "./images/blog1.jpg",
      title: "Developers watch out for these burnout symptoms",
      date: "20 MAY 2022",
      name: "BY ALEX WATSON",
    },
    {
      id: 2,
      cover: "./images/blog2.jpg",
      title: "How to be appreciated for your hard work as a developer",
      date: "07 APRIL 2022",
      name: "BY BROOK KENNEDY",
    },
    {
      id: 3,
      cover: "./images/blog3.jpg",
      title: "How designers and developers can collaborate better",
      date: "02 MARCH 2022",
      name: "BY PAOLA ATKINS ",
    },
  ]
  return (
    <>
      <section className='blog'>
        <div className='container'>
          <span className='baget'>news</span>
          <h1>Latest News</h1>
          <div className='content grid mtop'>
            {data.map((val) => {
              return (
                <div className='box'>
                  <div className='box'>
                    <img src={val.cover} alt='' />
                    <h2>{val.title}</h2>
                    <span>
                      {val.name} / {val.date}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog
