import { ICreateCategory } from "../../DTO/CategoryDto";
import { Specification } from "../../model/Specification";

interface ISpecificationRepositories {
  findByName(name: string): Specification;
  list(): Specification[];
  create({ name, description }: ICreateCategory): void;
}

export { ISpecificationRepositories };
