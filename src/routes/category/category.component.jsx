import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoryContainer, CategoryTitle } from "./category.styles";
import Spinner from "../../components/spinner/spinner.component";
import { getProductsByCategoryId } from "../../store/network/category";
import { useQuery } from "@tanstack/react-query";

const Category = () => {
  const { category: categoryId } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["products", categoryId],
    queryFn: () => getProductsByCategoryId(categoryId),
  });

  return (
    <>
      {isLoading && <Spinner />}
      {!isLoading && (
        <>
          <CategoryTitle>{data?.category?.name?.toUpperCase()}</CategoryTitle>
          <CategoryContainer>
            {data.products &&
              data.products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </CategoryContainer>
        </>
      )}
    </>
  );
};
export default Category;
