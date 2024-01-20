export function Card({title, price, imgUrl}) {
	return (
	
			<div className='card'>
				<div className='favorite'>
					<img src='/img/HeartOne.svg' alt='HeartOne' />
				</div>
				<img width={133} height={112} src={imgUrl} alt='Sneakers' />
				<h5>{title}</h5>
				<div className='d-flex justify-between align-center'>
					<div className='d-flex flex-column'>
						<span>Цена:</span>
						<b>{price} руб.</b>
					</div>
					<button className='button'>
						<img width={11} height={11} src='img/NotAddedCart.svg' alt='plus' />
					</button>
				</div>
			</div>

	);
}
