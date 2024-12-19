import Header from './components/Header'
import Faq from './components/Faq'
import Button from './components/Button/Button'
import { useState } from 'react'
import { faqs, values } from './data'

export default function App() {
  const [contentType, setContentType] = useState(null)

  function handleClick(type) {
    setContentType(type)
  }

  return (
    <div>
      <Header />
      <main>
        <section>
          <h3>Frequently Asked Questions:</h3>
          <ul>
            {faqs.map((faq) => {
              return < Faq key={faq.question} {...faq} />
            })}
            {/* <Faq
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
            <Faq {...faqs[3]} />
            <Faq {...faqs[4]} /> */}
          </ul>
        </section>
        <section>
          <h3>Main values of our company:</h3>
          <Button
            isActive={contentType === 'opennes'}
            buttonClicked={() => handleClick('opennes')}>
            First
          </Button>
          <Button
            isActive={contentType === 'responsibility'}
            buttonClicked={() => handleClick('responsibility')}>
            Second
          </Button>
          <Button
            isActive={contentType === 'innovation'}
            buttonClicked={() => handleClick('innovation')}>
            Third
          </Button>
          <Button
            isActive={contentType === 'quality'}
            buttonClicked={() => handleClick('quality')}>
            Fourth
          </Button>

          {!contentType && <p>Push the button</p>}

          {contentType && <p>{values[contentType]}</p>}

        </section>
      </main>
    </div >
  )
}
