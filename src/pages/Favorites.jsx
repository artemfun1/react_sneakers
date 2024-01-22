import { useContext} from 'react'
import { Card } from '../components/Card'
import { AppContext } from '../context'



export function Favorites({ onAddToCart, onAddToFavorites, onRemoveFavoriteItem}){


	const {favorites} = useContext(AppContext)

	

  return(
    <div className='content p-40'>
				<div className='d-flex align-center justify-between mb-40 '>
					<h1>
						 Мои закладки
					</h1>
				
				</div>

				<div className='d-flex flex-wrap'>
					{favorites.map(item => (
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