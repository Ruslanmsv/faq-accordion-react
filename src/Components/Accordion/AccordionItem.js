import s from './AccordionItem.module.css';

const AccordionItem = props => {
    return (
        <li className={s['accordion-item']}>
            <input id={props.id} type="radio" name="accordion-input" hidden/>
            <label className={s.question} htmlFor={props.id}><span>{props.question}</span></label>
            <div className={s.answer}>{props.answer}</div>
        </li>
    )
}

export default AccordionItem;