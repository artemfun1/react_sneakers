import { useState } from 'react';
import styles from './Card.module.scss';

export function Card({
	title,
	price,
	imgUrl,
	onAddToCart,
	onAddToFavorites,
	like = false,
	onRemoveFavoriteItem
}) {
	const [isAdded, setIsAdded] = useState(false);

	const [isFavorite, setIsFavorite] = useState(like);

	const handleClickPlus = () => {
		setIsAdded(p => !p);
		onAddToCart();
	};


	function onClickFavorite() {

		if(like){
			setIsFavorite(p => !p);
			onRemoveFavoriteItem()
			return
		}


		if(isFavorite===false){
			setIsFavorite(p => !p);
		onAddToFavorites();
		
		} else {
			setIsFavorite(p => !p);
			onRemoveFavoriteItem()
			
		}


		
	}

	

	return (
		<div className={styles.card}>
			<div onClick={onClickFavorite} className={styles.favorite}>
				
					<img
						src={isFavorite ? '/img/HeartTwo.svg' : '/img/HeartOne.svg'}
						alt='HeartOne'
					/>
				
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
