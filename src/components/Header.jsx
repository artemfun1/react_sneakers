import axios from 'axios'
import { Link } from 'react-router-dom';

export function Header({ onClickCart }) {
	return (
		<header className='d-flex justify-between align-center p-40'>
			<Link to='/'>
				<div className='d-flex align-center'>
					<img width={40} height={40} src='img/logo.png' alt='logo' />
					<div>
						<h3 className='text-uppercase'>React Sneakers</h3>
						<p className='opacity-5'>Магазин лучших кроссовок</p>
					</div>
				</div>
			</Link>
			<ul className='d-flex'>
				<li onClick={onClickCart} className='mr-30 cu-p'>
					<img width={18} height={18} src='img/Cart.svg' alt='cart' />
					<span>1205 руб.</span>
				</li>
				<li className='mr-20 cu-p'>
					<Link to='/favorites'>
						<img
							width={18}
							height={18}
							src='img/FavoriteHeart.svg'
							alt='cart'
						/>
						<span>Закладки</span>
					</Link>
				</li>
				<li onClick={()=>{
					axios.patch(
						'https://e52956ada346c69b.mokky.dev/orders',[])
				}}>

					<img width={18} height={18} src='img/User.svg' alt='user' />
					<span>Профиль</span>
				</li>
			</ul>
		</header>
	);
}
