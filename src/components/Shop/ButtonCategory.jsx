
import { useDispatch, useSelector } from 'react-redux'
import { BtnCategory, ImgLogoBtn } from './ShopStyled'
import { selectedCategory } from '../../Redux/Categories/categoriesSlice'
import { useState } from 'react'




const ButtonCategory = ({id, category, img}) => {
  
  
  const getCategorySelected = useSelector((state) => state.categories.categorySelected);
  
  const [color, setColor] = useState('All')

  
  
  
  
  const dispatch = useDispatch()
  
  const handleCategory = (e) => {
    dispatch(selectedCategory(e))
    
    
  }
  

  return (
    
    <BtnCategory
      key={id}
      onClick={() => handleCategory(category)}
      selected={color === category ? setColor(null) : category === getCategorySelected }>
      
      {category === 'All' ? category : <ImgLogoBtn src={img} alt={category} />}
      
    </BtnCategory>


    
  )
}

export default ButtonCategory
