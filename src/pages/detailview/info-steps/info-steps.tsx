import { infosteps } from './info-steps-data'
import "./info-steps.css"
export default function Infosteps() {
    return (
        <ul className="infosteps d-flex flex-wrap align-items-center list-type-none">
            {infosteps.map(steps =>
                <>
                    <li className='mb-2' tabIndex={0} aria-label={steps.subtitle}>
                        <p className="font-12 subtitle-color1">{steps.subtitle}</p>
                        <p className="font-12 dark-text">{steps.title}</p>
                    </li>
                    <div className='divider dividerdashed vertical mx-2 mx-lg-3 mb-2'></div>
                </>
            )}
        </ul>
    );
}
