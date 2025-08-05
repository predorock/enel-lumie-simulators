import './Step.css';

import cn from 'classnames';

export default function Step({ number, copy, icon, active, past, last }) {
    let ariaLabel = `Step numero ${number} ${copy}`
    if (active) ariaLabel += " in corso"
    if (past) ariaLabel += " passato"
    const st = number === 5 && past ? {
        maxWidth: "100%",
    } : {}
    return (
        <><div role="listitem"
            style={st}
            aria-hidden={false}
            className={cn({'active': active, 'past': past, 'step': true, 'last': last})}>
            <li className="hidden">{ariaLabel}</li>
            <div className="step-box" aria-hidden={true}>
                <div className={"step-number-box " + (past ? "past" : "")}>
                    <div className="step-number">
                        {icon ? <img src={icon} alt="checkmark" style={{ marginLeft: "1px" }} /> :
                            <span aria-hidden={true} >{number}</span>}
                    </div>
                </div>
            </div>
            <div aria-hidden={true} className="text-white">{active ? copy : ""}</div>
        </div>
        </>
    )
}