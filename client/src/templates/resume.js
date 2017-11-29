import React from "react";

const Resume = ({ resumeContent }) => {
  return <div className="resume-wr">
    <header className="header-wr">
        <img src='' alt='chandan' />
        {resumeContent.header.text}
    </header>
    <section className="content-wr">
      <section className="left-section">
        {
          resumeContent.leftSection.map((item, index) => {
            return <SubArticle item={item} key={index} />
          })
        }
    
      </section>
      <section className="right-section">
        {
          resumeContent.rightSection.map((item, index) => {
            return <SubArticle item={item} key={index} />
          })
        }
      </section>
    </section>
  </div>
}

const SubArticle = ({ item }) => {
  return <article>
    {item.header}
    {item.content}
  </article>
}

export default Resume;
