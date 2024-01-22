import axios from 'axios';
import { useContext, useState } from 'react';
import { AppContext } from '../context';
import { Info } from './Info';

export function Drawer({ onRemoveCartItem,setCartItems }) {
	const { cartItems, setIsCartOpen } = useContext(AppContext);

	const [order, setOrder] = useState(false);

	return (
		<div className='overlay'>
			<div className='drawer'>
				<h2 className='mb-30 d-flex justify-between'>
					Корзина{' '}
					<img
						className='cu-p'
						src='img/BtnCancel.svg'
						alt=''
						onClick={() => setIsCartOpen(false)}
					/>
				</h2>

				{cartItems.length > 0 && order === false ? (
					<div className='d-flex flex-column flex'>
						<div className='items'>
							{cartItems.map(obj => (
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
									<img
										onClick={() => onRemoveCartItem(obj.key)}
										className='removeBtn'
										src='img/BtnCancel.svg'
										alt='someImg'
									/>
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

							<button
								onClick={async() => {
								
									await axios.post(
										'https://e52956ada346c69b.mokky.dev/orders',
										cartItems
									);

									await axios.patch(
										'https://e52956ada346c69b.mokky.dev/cart',[]
									);

									await setCartItems([])



									return setOrder(p => !p);
								}}
								className='greenBtn'
							>
								Оформить заказ
								<img src='/img/arrow1.svg' alt='arrow1' />
							</button>
						</div>
					</div>
				) : order === false ? (
					<Info
						title={'Корзина пустая'}
						description={
							'Добавьте хотя бы одну пару кроссовок, чтоб сделать заказ.'
						}
						image={'/img/BoxCart.png'}
					/>
				) : (
					<Info
						title={'Заказ оформлен!'}
						description={
							'Ваш заказ #18 скоро будет передан курьерской доставке.'
						}
						image={'/img/Zakaz.png'}
					/>
				)}
			</div>
		</div>
	);
}
