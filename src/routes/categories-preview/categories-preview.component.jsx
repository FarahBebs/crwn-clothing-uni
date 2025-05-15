import { Fragment } from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import Spinner from "../../components/spinner/spinner.component";
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../store/network/category";

const CategoriesPreview = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        data?.categories?.map((category) => (
          <Fragment key={category.id}>
            <CategoryPreview category={category} />
          </Fragment>
        ))
      )}
    </Fragment>
  );
};
export default CategoriesPreview;
