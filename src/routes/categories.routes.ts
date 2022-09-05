import { Router } from "express";
import { CategoryRepository } from "../repositories/CategoryRepository";
import { CreateCategoryService } from "../services/CategoryService";

const categoriesRoutes = Router();
const categoriesRepository = new CategoryRepository();

categoriesRoutes.get("/", (request, response) => {
  const all = categoriesRepository.list();

  return response.status(200).json({
    data: all,
  });
});

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);

  createCategoryService.excute({ name, description });

  return response.status(201).send();
});

export { categoriesRoutes };
