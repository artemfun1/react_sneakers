import { Card } from '../components/Card'

export function Favorites({arrItems, onAddToCart, onAddToFavorites, onRemoveFavoriteItem}){
  return(
    <div className='content p-40'>
				<div className='d-flex align-center justify-between mb-40 '>
					<h1>
						 Мои закладки
					</h1>
				
				</div>

				<div className='d-flex flex-wrap'>
					{arrItems.map(item => (
							<Card
								like={true}
								key={item.key}
								itemKey={item.key}
								title={item.title}
								price={item.price}
								imgUrl={item.imgUrl}
								onAddToCart={() => onAddToCart(item)}
                onAddToFavorites={() => onAddToFavorites(item)}
                onRemoveFavoriteItem={()=>onRemoveFavoriteItem(item.key)}
							/>
						))}
				</div>
			</div>
  )
}