import './card.styles.css'

export const Card = props => (
    <div className='card-container'>
        <img src={`https://robohash.org/${props.monster.id}?set=set4&size=180x180`} alt="cats" />
        <h1>{props.monster.name}</h1>
        <h4>{props.monster.email}</h4>
    </div>
)