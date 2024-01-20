import { useEffect, useState } from 'react';
import { Card } from './components/Card';
import { Drawer } from './components/Drawer';
import { Header } from './components/Header';

function App() {
	const [items, setItems] = useState([]);

	const [cartItems, setCartItems] = useState([]);

	const [isCartOpen, setIsCartOpen] = useState(false);

	useEffect(() => {
		fetch('https://e52956ada346c69b.mokky.dev/items')
			.then(data => data.json())
			.then(data => setItems(data));
	}, []);

	const onAddToCart = obj => {
		if (cartItems.includes(obj)) {
			console.log(1);
			return;
		} else setCartItems(prev => [...prev, obj]);
	};

	return (
		<div className='wrapper clear'>
			{Boolean(isCartOpen) && (
				<Drawer item={cartItems} onClose={() => setIsCartOpen(false)} />
			)}

			<Header onClickCart={() => setIsCartOpen(true)} />

			<div className='content p-40'>
				<div className='d-flex align-center justify-between mb-40 '>
					<h1>Все кроссовки</h1>
					<div className='search-block d-flex'>
						<img src='/img/Search.svg' alt='Search' />
						<input placeholder='Поиск...' />
					</div>
				</div>

				<div className='d-flex flex-wrap'>
					{items.map((item, i) => (
						<Card
							key={i}
							title={item.title}
							price={item.price}
							imgUrl={item.imgUrl}
							onClickFavorite={() => console.log(item)}
							onClickPlus={obj => onAddToCart(item)}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default App;

// const arr = [
// 	{
// 		title: 'Мужские Кроссовки Nike Blazer Mid Suede',
// 		price: 12999,
// 		imgUrl: 'img/sneakers/1.jpg',
// 	},
// 	{
// 		title: 'Мужские Кроссовки Nike Air Max 270',
// 		price: 15600,
// 		imgUrl: 'img/sneakers/2.jpg',
// 	},
// 	{
// 		title: 'Мужские Кроссовки Nike Blazer Mid Suede',
// 		price: 8499,
// 		imgUrl: 'img/sneakers/3.jpg',
// 	},
// 	{
// 		title: 'Кроссовки Puma X Aka Boku Future Rider',
// 		price: '8 999',
// 		imgUrl: 'img/sneakers/4.jpg',
// 	},

// 	{
// 		title: 'Мужские Кроссовки Under Armour Curry 8',
// 		price: '15 199',
// 		imgUrl: 'img/sneakers/5.jpg',
// 	},
// 	{
// 		title: 'Мужские Кроссовки Nike Kyrie 7',
// 		price: '11 299',
// 		imgUrl: 'img/sneakers/6.jpg',
// 	},
// 	{
// 		title: 'Мужские Кроссовки Jordan Air Jordan 11',
// 		price: '10 799',
// 		imgUrl: 'img/sneakers/7.jpg',
// 	},
// 	{
// 		title: 'Мужские Кроссовки Nike LeBron XVIII',
// 		price: '16 499',
// 		imgUrl: 'img/sneakers/8.jpg',
// 	},

// 	{
// 		title: 'Мужские Кроссовки Nike Lebron XVIII Low',
// 		price: '13 999',
// 		imgUrl: 'img/sneakers/9.jpg',
// 	},
// 	{
// 		title: 'Мужские Кроссовки Nike Blazer Mid Suede',
// 		price: '8 499',
// 		imgUrl: 'img/sneakers/10.jpg',
// 	},
// 	{
// 		title: 'Кроссовки Puma X Aka Boku Future Rider',
// 		price: '8 999',
// 		imgUrl: 'img/sneakers/11.jpg',
// 	},
// 	{
// 		title: 'Мужские Кроссовки Nike Kyrie Flytrap IV',
// 		price: '11 299',
// 		imgUrl: 'img/sneakers/12.jpg',
// 	},
// ];
