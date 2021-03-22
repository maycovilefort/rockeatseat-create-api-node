import { Router } from 'express';
import { CategoriesRepository } from '../repositories/CategoriesRepository';
import { CreateCategoryService } from '../service/CreateCategoryService';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.get('/', (request, response) => {
    const allCategories = categoriesRepository.list();

    return response.json(allCategories);
})

categoriesRoutes.post('/', (request, response) => {
    const { name, description } = request.body;
    const createCategoryService = new CreateCategoryService(categoriesRepository);

    createCategoryService.execute({ name, description })

    return response.status(201).send();
})


export { categoriesRoutes }