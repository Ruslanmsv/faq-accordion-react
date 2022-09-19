import s from './AccordionItem.module.css';

const AccordionItem = props => {
    return (
        <li className={s['accordion-item']}>
            <input id={props.id} type="radio" name="accordion-input" hidden/>
            <label className={s.title} htmlFor={props.id}><span>{props.title}</span></label>
            <div className={s.description}>{props.description}</div>
        </li>
    )
}

export default AccordionItem;