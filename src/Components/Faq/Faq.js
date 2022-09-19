import Accordion from '../Accordion/Accordion';

import s from './Faq.module.css';

const Faq = props => {
    console.log(props.data);
    return (
        <div className={s.container}>
            <div className={s.picture}>
                <div className={s.box}></div>
            </div>
            <div className={s.content}>
                <h1 className={s.title}>FAQ</h1>
                <Accordion data={props.data} />
            </div>
        </div>
    )
};

export default Faq;