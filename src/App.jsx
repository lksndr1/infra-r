import Header from './components/Header'
import Faq from './components/Faq'
import Button from './components/Button/Button'
import { useState } from 'react'
import { faqs, values } from './data'

export default function App() {
  const [content, setContent] = useState('Press button')

  function handleClick(type) {
    setContent(type)
  }

  return (
    <div>
      <Header />
      <main>
        <section>
          <h3>Frequently Asked Questions:</h3>
          <ul>
            <Faq
              question={faqs[0].question}
              answer={faqs[0].answer}
            />
            <Faq
              question={faqs[1].question}
              answer={faqs[1].answer}
            />
            <Faq
              question={faqs[2].question}
              answer={faqs[2].answer}
            />
            <Faq
              question={faqs[3].question}
              answer={faqs[3].answer}
            />
            <Faq
              question={faqs[4].question}
              answer={faqs[4].answer}
            />
          </ul>
        </section>
        <section>
          <h3>Main values of our company:</h3>
          <Button buttonClicked={() => handleClick('opennes')}>First</Button>
          <Button buttonClicked={() => handleClick('responsibility')}>Second</Button>
          <Button buttonClicked={() => handleClick('innovation')}>Third</Button>
          <Button buttonClicked={() => handleClick('quality')}>Fourth</Button>

          <p>{values[content]}</p>
        </section>
      </main>
    </div>
  )
}
