import AccordionItem from './AccordionItem';

import s from "./Accordion.module.css";

const Accordion = (props) => {
  return (
    <ul className={s.accordion}>
      {props.data.map((item) => (
        <AccordionItem
          key={item.id}
          id={"accordion-item-" + item.id}
          title={item.title}
          description={item.description}
        />
      ))}
    </ul>
  );
};

export default Accordion;
