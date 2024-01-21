import { Card } from '../components/Card';

export function Home({
	searchValue,
	onChangeSearchInput,
	items,
	onAddToFavorites,
	onAddToCart,
	onRemoveFavoriteItem,
}) {
	return (
		<div className='content p-40'>
			<div className='d-flex align-center justify-between mb-40 '>
				<h1>
					{searchValue ? `Поиск по запросу "${searchValue}"` : 'Все кроссовки'}
				</h1>
				<div className='search-block d-flex'>
					<img src='/img/Search.svg' alt='Search' />
					<input
						onChange={onChangeSearchInput}
						placeholder='Поиск...'
						value={searchValue}
					/>
				</div>
			</div>

			<div className='d-flex flex-wrap'>
				{items
					.filter(item =>
						item.title.toLowerCase().includes(searchValue.toLowerCase())
					)
					.map(item => (
						<Card
							onRemoveFavoriteItem={()=>onRemoveFavoriteItem(item.key)}
							onAddToFavorites={() => onAddToFavorites(item)}
							key={item.key}
							itemKey={item.key}
							title={item.title}
							price={item.price}
							imgUrl={item.imgUrl}
							onAddToCart={() => onAddToCart(item)}
						/>
					))}
			</div>
		</div>
	);
}
