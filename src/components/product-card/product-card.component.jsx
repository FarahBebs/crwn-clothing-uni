import {
  Name,
  Price,
  Footer,
  ProductCardContainer,
} from "./product-card.styles.jsx";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { addToCart } from "../../store/cart/cart.action.js";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector.js";
import { ReactComponent as DefaultProuctImage } from "../../assets/default-product-image.svg";
import { useNavigate } from "react-router-dom";
import { deleteProduct } from "../../store/network/category.js";
import { useMutation } from "@tanstack/react-query";
import queryClient from "../../queryClient.js";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);
  const { currentUser } = useSelector((state) => state.user);
  const isAdmin = currentUser?.role === "admin";
  const addProductToCart = () => dispatch(addToCart(cartItems, product));

  const { mutateAsync } = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
    },
  });
  return (
    <ProductCardContainer>
      {imageUrl ? (
        <img src={imageUrl} alt={`${name}`} />
      ) : (
        <DefaultProuctImage alt={`${name}`} />
      )}
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      {isAdmin && (
        <button
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "red",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "30px",
            height: "30px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => {
            if (
              window.confirm("Are you sure you want to delete this product?")
            ) {
              mutateAsync(product?.id);
            }
          }}
        >
          X
        </button>
      )}
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={
          isAdmin
            ? () => navigate(`/product/${product?.id}/edit`)
            : addProductToCart
        }
      >
        {isAdmin ? "Edit" : "Add to cart"}
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
