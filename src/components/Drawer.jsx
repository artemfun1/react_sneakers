export function Drawer({ onClose, item = [],onRemoveCartItem }) {
	return (
		<div className='overlay'>
			<div className='drawer'>
				<h2 className='mb-30 d-flex justify-between'>
					Корзина{' '}
					<img
						className='cu-p'
						src='img/BtnCancel.svg'
						alt=''
						onClick={onClose}
					/>
				</h2>

				<div className='items'>
					{item.map(obj => (
						<div
							key={obj.key}
							className='cartItem d-flex align-center mb-20'
						>
							<div
								style={{
									backgroundImage: `url(${obj.imgUrl})`,
								}}
								className='cardItemImg'
							></div>

							<div className='mr-20 flex '>
								<p className='mb-5'>{obj.title}</p>
								<b>{obj.price} руб.</b>
							</div>
							<img onClick={()=>onRemoveCartItem(obj.key)} className='removeBtn' src='img/BtnCancel.svg' alt='' />
						</div>
					))}
				</div>

				<div className='cardTotalBlock'>
					<ul>
						<li>
							<span>Итого:</span>
							<div></div>
							<b> 21 498 руб.</b>
						</li>
						<li>
							<span> Налог 5%:</span>
							<div></div>
							<b> 1074 руб.</b>
						</li>
					</ul>
					<button className='greenBtn'>
						Оформить заказ
						<img src='/img/arrow1.svg' alt='arrow1' />
					</button>
				</div>
			</div>
		</div>
	);
}
