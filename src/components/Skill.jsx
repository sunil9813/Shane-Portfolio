import React from "react"

const Skill = () => {
  const data = [
    {
      title: "I have high skills in developing and programming",
      decs: "I am working on a professional, visually sophisticated and technologically proficient, responsive and multi-functional personal portfolio template Shane.",
    },
  ]

  const Progress = ({ done, title }) => {
    return (
      <div className='progress'>
        <div
          className='progress-done'
          style={{
            opacity: 1,
            width: `${done}%`,
          }}
        >
          <h4> {title}</h4>
          <h4> {done}%</h4>
        </div>
      </div>
    )
  }

  return (
    <>
      <section className='skill mtop'>
        <div className='container flexSB'>
          {data.map((value) => {
            return (
              <div className='left row'>
                <h1>{value.title}</h1>
                <p>{value.decs}</p>
              </div>
            )
          })}
          <div className='right row'>
            <Progress done='95' title='Web Development' />
            <Progress done='80' title='Brand Identity' />
            <Progress done='90' title='Logo Design' />
          </div>
        </div>
      </section>
    </>
  )
}

export default Skill
