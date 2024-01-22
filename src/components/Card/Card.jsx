import { useContext, useState } from 'react';
import ContentLoader from 'react-content-loader';
import { AppContext } from '../../context';
import styles from './Card.module.scss';

export function Card({
	title,
	price,
	imgUrl,
	onAddToCart,
	onAddToFavorites,
	like = false,
	onRemoveFavoriteItem,
	clickPlus = false,
	onRemoveCartItem,
	isLoading,
	itemKey,
}) {
	const { cartItems } = useContext(AppContext);
	const [isAdded, setIsAdded] = useState(clickPlus);
	const [isFavorite, setIsFavorite] = useState(like);

	const handleClickPlus = () => {
		if (isAdded) {
			setIsAdded(p => !p);

			for (let i of cartItems) {
				if (i.key === itemKey) {
					onRemoveCartItem();
				}
			}
			return;
		}

		if (isAdded === false) {
			setIsAdded(p => !p);

			onAddToCart();
		}
	};

	function onClickFavorite() {
		if (isFavorite) {
			setIsFavorite(p => !p);
			onRemoveFavoriteItem();
			return;
		}

		if (isFavorite === false) {
			setIsFavorite(p => !p);
			onAddToFavorites();
		} else {
			setIsFavorite(p => !p);
			onRemoveFavoriteItem();
		}
	}

	return (
		<div className={styles.card}>
			{isLoading ? (
				<ContentLoader
					speed={2}
					width={155}
					height={225}
					viewBox='0 0 155 265'
					backgroundColor='#f3f3f3'
					foregroundColor='#ecebeb'
				>
					<rect x='1' y='0' rx='10' ry='10' width='133' height='112' />
					<rect x='0' y='150' rx='5' ry='5' width='155' height='15' />
					<rect x='0' y='170' rx='5' ry='5' width='100' height='15' />
					<rect x='1' y='220' rx='5' ry='5' width='80' height='25' />
					<rect x='129' y='230' rx='10' ry='10' width='32' height='32' />
				</ContentLoader>
			) : (
				<>
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
							src={clickPlus ? 'img/AddedCart.svg' : 'img/NotAddedCart.svg'}
							alt='plus'
						/>
					</div>
				</>
			)}
		</div>
	);
}
