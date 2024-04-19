import styles from './Card.module.css';

export function Card(props) {
    return(
        <div className={styles.cardContent}>
            <img src={props.imgUrl} />

            <h3>{props.name}</h3>
            <span>{props.type}</span>
        </div>
    )
}