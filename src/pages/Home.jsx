import { Card } from '../components/Card';

export function Home({
	searchValue,
	onChangeSearchInput,
	items,
	onAddToFavorites,
	onAddToCart,
	onRemoveFavoriteItem,
	onRemoveCartItem,
	cartItems,
	isLoading,
}) {
	const renderItems = () => {
		const filteredItems = items.filter(item =>
			item.title.toLowerCase().includes(searchValue.toLowerCase())
		);

		return (isLoading ? [...Array(12)] : filteredItems).map((item, i) => (
			<Card
				onRemoveFavoriteItem={() => onRemoveFavoriteItem(item.key)}
				onAddToFavorites={() => onAddToFavorites(item)}
				key={item ? item.key : i}
				itemKey={item?.key}
				title={item?.title}
				price={item?.price}
				imgUrl={item?.imgUrl}
				onAddToCart={() => onAddToCart(item)}
				onRemoveCartItem={() => onRemoveCartItem(item.key)}
				clickPlus={cartItems.some(obj => obj.key === item.key)}
				like={false}
				isLoading={isLoading}
			/>
		));
	};

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

			<div className='d-flex flex-wrap'>{renderItems()}</div>
		</div>
	);
}
