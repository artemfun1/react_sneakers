import { useState } from 'react';
import styles from './Card.module.scss';

export function Card({ title, price, imgUrl, onClickPlus, onClickFavorite }) {
	const [isAdded, setIsAdded] = useState(false);

	const handleClickPlus = () => {
		setIsAdded(p => !p);
		onClickPlus({title, price, imgUrl})
	};



	return (
		<div className={styles.card}>
			<div onClick={onClickFavorite} className={styles.favorite}>
				<img src='/img/HeartOne.svg' alt='HeartOne' />
			</div>
			<img width={133} height={112} src={imgUrl} alt='Sneakers' />
			<h5>{title}</h5>
			<div className='d-flex justify-between align-center'>
				<div className='d-flex flex-column'>
					<span>Цена:</span>
					<b>{price} руб.</b>
				</div>

				<img
					className={styles.plus}
					onClick={handleClickPlus}
					src={isAdded ? 'img/AddedCart.svg' : 'img/NotAddedCart.svg'}
					alt='plus'
				/>
			</div>
		</div>
	);
}
