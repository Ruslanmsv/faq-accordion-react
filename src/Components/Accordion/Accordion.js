import AccordionItem from './AccordionItem';

import s from "./Accordion.module.css";

const Accordion = (props) => {
  return (
    <ul className={s.accordion}>

      {props.data.map((item) => (
        <AccordionItem
          key={item.id}
          id={"accordion-item-" + item.id}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </ul>
  );
};

export default Accordion;
