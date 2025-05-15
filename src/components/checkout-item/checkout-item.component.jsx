import {
  CheckoutItemContainer,
  ImageContainer,
  Name,
  Quentity,
  Arrow,
  Value,
  Price,
  RemoveButton,
} from "./chechout-item.styles";
import {
  deleteItem,
  addToCart,
  removeFromCart,
} from "../../store/cart/cart.action";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
const CheckoutItem = ({ cartItem }) => {
  const { quantity, name, imageUrl, price } = cartItem;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const clearItemHandler = () => dispatch(deleteItem(cartItems, cartItem));
  const addItemHandler = () => dispatch(addToCart(cartItems, cartItem));
  const removeItemHandler = () => dispatch(removeFromCart(cartItems, cartItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <Name>{name}</Name> <br />
      <Quentity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quentity>
      <Price>{price}</Price>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
