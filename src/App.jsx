import Header from './components/Header'
import Faq from './components/Faq'
import { faqs } from './data'

export default function App() {
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
          <h3>Our advantages:</h3>
        </section>
      </main>
    </div>
  )
}
