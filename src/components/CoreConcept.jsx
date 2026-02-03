import componentImg from '../assets/components.png';

export default function CoreConcept({ title, description, ImgSrc}) {
    return (
        <section id='core-concepts'>
            <ul>
                <li>
                    <img src={ImgSrc} alt="Component Image" />
                    <h3>{title}</h3>
                    <p>{description}</p>
                </li>
            </ul>
        </section>
    )

}