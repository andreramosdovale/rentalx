import { ICreateCategory } from "../../DTO/CategoryDto";
import { Category } from "../../model/Category";

interface ICategoriesRepository {
  findByName(name: string): Category;
  list(): Category[];
  create({ name, description }: ICreateCategory): void;
}

export { ICategoriesRepository };
