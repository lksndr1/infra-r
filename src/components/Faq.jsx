export default function Faq(props) {
    return (
        <li>
            <p>
                <strong>{props.question}</strong> {props.answer}
            </p>
        </li>
    )
}