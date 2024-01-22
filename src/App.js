import axios from 'axios';
import { React, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Drawer } from './components/Drawer';
import { Header } from './components/Header';
import { AppContext } from './context';
import { Favorites } from './pages/Favorites';
import { Home } from './pages/Home';

function App() {
	const [items, setItems] = useState([]);
	const [cartItems, setCartItems] = useState([]);
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [searchValue, setSearchValue] = useState('');
	const [favorites, setFavorites] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function fetchData() {
			setIsLoading(true);
			const cartRes = await axios.get(
				'https://e52956ada346c69b.mokky.dev/cart'
			);

			const favoritesRes = await axios.get(
				'https://e52956ada346c69b.mokky.dev/favorite'
			);

			const itemsRes = await axios.get(
				'https://e52956ada346c69b.mokky.dev/items'
			);

			setIsLoading(false);
			setCartItems(cartRes.data);
			setFavorites(favoritesRes.data);
			setItems(itemsRes.data);
		}

		fetchData();
	}, []);

	const onAddToCart = obj => {
		let cur = true;
		if (cartItems.length === 0) {
			setCartItems(prev => [...prev, obj]);
			axios.post('https://e52956ada346c69b.mokky.dev/cart', obj);
		} else {
			for (let i = 0; i < cartItems.length; i++) {
				if (cartItems[i].key === obj.key) {
					cur = false;
				}
			}

			if (cur === true) {
				setCartItems(prev => [...prev, obj]);
				axios.post('https://e52956ada346c69b.mokky.dev/cart', obj);
			}
		}
	};

	const onRemoveCartItem = key => {
		axios.delete(`https://e52956ada346c69b.mokky.dev/cart/${key}`);

		setCartItems(prev => prev.filter(item => item.key !== key));

		// setItems(p=>[...p])

	
	};



	const onRemoveFavoriteItem = key => {
		axios.delete(`https://e52956ada346c69b.mokky.dev/favorite/${key}`);

		setFavorites(prev => prev.filter(item => item.key !== key));
	};

	const onAddToFavorites = obj => {
		let cur = true;
		if (favorites.length === 0) {
			setFavorites(p => [...p, obj]);
			axios.post(`https://e52956ada346c69b.mokky.dev/favorite`, obj);
		} else {
			for (let i = 0; i < favorites.length; i++) {
				if (favorites[i].key === obj.key) {
					cur = false;
				}
			}

			if (cur === true) {
				setFavorites(p => [...p, obj]);
				axios.post(`https://e52956ada346c69b.mokky.dev/favorite`, obj);
			}
		}
	};

	const onChangeSearchInput = event => {
		setSearchValue(event.target.value);
	};

	return (
		<AppContext.Provider value={{ cartItems, favorites,setIsCartOpen}}>
			<div className='wrapper clear'>
				{Boolean(isCartOpen) && (
					<Drawer
					setCartItems={setCartItems}
						onRemoveCartItem={onRemoveCartItem}
					/>
				)}

				<Header onClickCart={() => setIsCartOpen(true)} />

				<Routes>
					<Route
						path='/favorites'
						element={
							<Favorites
								onAddToCart={onAddToCart}
								onRemoveFavoriteItem={onRemoveFavoriteItem}
							/>
						}
					/>
					<Route
						path='/'
						element={
							<Home
								searchValue={searchValue}
								onChangeSearchInput={onChangeSearchInput}
								items={items}
								onAddToFavorites={onAddToFavorites}
								onAddToCart={onAddToCart}
								onRemoveFavoriteItem={onRemoveFavoriteItem}
								onRemoveCartItem={onRemoveCartItem}
								cartItems={cartItems}
								isLoading={isLoading}
							/>
						}
					/>
				</Routes>
			</div>
		</AppContext.Provider>
	);
}

export default App;

// const arr = [
// 	{
// 		key: 1,
// 		title: 'Мужские Кроссовки Nike Blazer Mid Suede',
// 		price: 12999,
// 		imgUrl: 'img/sneakers/1.jpg',
// 	},
// 	{
// 		key: 2,
// 		title: 'Мужские Кроссовки Nike Air Max 270',
// 		price: 15600,
// 		imgUrl: 'img/sneakers/2.jpg',
// 	},
// 	{
// 		key: 3,
// 		title: 'Мужские Кроссовки Nike Blazer Mid Suede',
// 		price: 8499,
// 		imgUrl: 'img/sneakers/3.jpg',
// 	},
// 	{
// 		key: 4,
// 		title: 'Кроссовки Puma X Aka Boku Future Rider',
// 		price: '8 999',
// 		imgUrl: 'img/sneakers/4.jpg',
// 	},

// 	{
// 		key: 5,
// 		title: 'Мужские Кроссовки Under Armour Curry 8',
// 		price: '15 199',
// 		imgUrl: 'img/sneakers/5.jpg',
// 	},
// 	{
// 		key: 6,
// 		title: 'Мужские Кроссовки Nike Kyrie 7',
// 		price: '11 299',
// 		imgUrl: 'img/sneakers/6.jpg',
// 	},
// 	{
// 		key: 7,
// 		title: 'Мужские Кроссовки Jordan Air Jordan 11',
// 		price: '10 799',
// 		imgUrl: 'img/sneakers/7.jpg',
// 	},
// 	{
// 		key: 8,
// 		title: 'Мужские Кроссовки Nike LeBron XVIII',
// 		price: '16 499',
// 		imgUrl: 'img/sneakers/8.jpg',
// 	},

// 	{
// 		key: 9,
// 		title: 'Мужские Кроссовки Nike Lebron XVIII Low',
// 		price: '13 999',
// 		imgUrl: 'img/sneakers/9.jpg',
// 	},
// 	{
// 		key: 10,
// 		title: 'Мужские Кроссовки Nike Blazer Mid Suede',
// 		price: '8 499',
// 		imgUrl: 'img/sneakers/10.jpg',
// 	},
// 	{
// 		key: 11,
// 		title: 'Кроссовки Puma X Aka Boku Future Rider',
// 		price: '8 999',
// 		imgUrl: 'img/sneakers/11.jpg',
// 	},
// 	{
// 		key: 12,
// 		title: 'Мужские Кроссовки Nike Kyrie Flytrap IV',
// 		price: '11 299',
// 		imgUrl: 'img/sneakers/12.jpg',
// 	},
// ];

// console.log(JSON.stringify(arr))
