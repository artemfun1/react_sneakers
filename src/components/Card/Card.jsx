
import styles from './Card.module.scss'


export function Card({ title, price, imgUrl, onClick }) {
	return (
		<div className={styles.card}>
			<div className={styles.favorite}>
				<img src='/img/HeartOne.svg' alt='HeartOne' />
			</div>
			<img width={133} height={112} src={imgUrl} alt='Sneakers' />
			<h5>{title}</h5>
			<div className='d-flex justify-between align-center'>
				<div className='d-flex flex-column'>
					<span>Цена:</span>
					<b>{price} руб.</b>
				</div>
				<button className='button' onClick={() => onClick()}>
					<img width={32} height={32} src='img/NotAddedCart.svg' alt='plus' />
				</button>
			</div>
		</div>
	);
}
