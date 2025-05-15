import { useDispatch, useSelector } from "react-redux";
import { CartIconContainer, ItemCount, ShoppingIcon } from "./cart-icon.styles";
import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cart.selector";
import { setIsOpen } from "../../store/cart/cart.action";

const CartIcon = () => {
  const cartCount = useSelector(selectCartCount);
  const isOpen = useSelector(selectIsCartOpen);

  const dispatch = useDispatch();

  const toggleIsCartOpen = () => dispatch(setIsOpen(!isOpen));
  return (
    <CartIconContainer>
      <ShoppingIcon className="shopping-icon" onClick={toggleIsCartOpen} />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
