import "./category-preview.styles.jsx";
import ProductCard from "../product-card/product-card.component";
import {
  CategoryPreviewContainer,
  CategoryPreviewTitle,
  Preview,
} from "./category-preview.styles";

const CategoryPreview = ({ category }) => {
  const { name, id, products } = category || {};
  return (
    <CategoryPreviewContainer>
      <h2>
        <CategoryPreviewTitle to={id}>
          {name?.toUpperCase()}
        </CategoryPreviewTitle>
      </h2>
      <Preview>
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
