import Faq from './Faq'
import { faqs } from '../data'

export default function FaqsSection() {
    return (
        <section>
            <h3>Frequently Asked Questions:</h3>
            <ul>
                {faqs.map((faq) => {
                    return < Faq key={faq.question} {...faq} />
                })}
            </ul>
        </section>
    )
}