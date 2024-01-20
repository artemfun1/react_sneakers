import { Card } from './components/Card';
import { Drawer } from './components/Drawer';
import { Header } from './components/Header';

const arr = [
	{
		title: 'Мужские Кроссовки Nike Blazer Mid Suede',
		price: 12999,
		imgUrl: 'img/sneakers/1.jpg',
	},
	{
		title: 'Мужские Кроссовки Nike Air Max 270',
		price: 15600,
		imgUrl: 'img/sneakers/2.jpg',
	},
	{
		title: 'Мужские Кроссовки Nike Blazer Mid Suede',
		price: 8499,
		imgUrl: 'img/sneakers/3.jpg',
	},
	{
		title: 'Кроссовки Puma X Aka Boku Future Rider',
		price: '8 999',
		imgUrl: 'img/sneakers/4.jpg',
	},
];

function App() {
	return (
		<div className='wrapper clear'>
			<Drawer />

			<Header />

			<div className='content p-40'>
				<div className='d-flex align-center justify-between mb-40 '>
					<h1>Все кроссовки</h1>
					<div className='search-block d-flex'>
						<img src='/img/Search.svg' alt='Search' />
						<input placeholder='Поиск...' />
					</div>
				</div>

				<div className='d-flex'>
					{arr.map((obj, i) => (
						<Card
							key={i}
							title={obj.title}
							price={obj.price}
							imgUrl={obj.imgUrl}
							onClick={() => console.log(obj)}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default App;
