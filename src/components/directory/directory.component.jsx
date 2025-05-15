import { CategoriesContainer } from "./directory.styles";
import DirectoryItem from "../directory-item/directory-item.component";
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../store/network/category";

const Directory = () => {
  const { data } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
  return (
    <CategoriesContainer>
      {data?.categories?.map((category) => {
        return <DirectoryItem key={category.id} category={category} />;
      })}
    </CategoriesContainer>
  );
};
export default Directory;
