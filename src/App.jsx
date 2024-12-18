import Header from './components/Header'
import { faqs } from './data'

function Faq(props) {
  return (
    <li>
      <p>
        <strong>{props.question}</strong> {props.answer}
      </p>
    </li>
  )
}

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
      </main>
    </div>
  )
}
