import { Category } from "../models/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "./ICategoriesRepository";


class CategoriesRepository implements ICategoriesRepository {
    private categories: Category[];

    list(): Category[] {
        return this.categories;
    }

    findByName(name: string): Category {
        const category = this.categories
            .find(categories => categories.name === name);

        return category;
    }

    create({ name, description }: ICreateCategoryDTO): void {
        const category = new Category();
        Object.assign(category, {
            name,
            description,
            create_at: new Date()
        })

        this.categories.push(category);
    }

    constructor() {
        this.categories = [];
    }
}

export { CategoriesRepository }