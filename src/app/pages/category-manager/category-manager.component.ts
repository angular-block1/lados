import { Component } from "@angular/core";
import { CategoryService } from "app/services/category.service";
import * as moment from "moment";
import slugify from "slugify";

@Component({
	selector: "app-category-manager",
	templateUrl: "./category-manager.component.html",
	styleUrls: ["./category-manager.component.scss"],
})
export class CategoryManagerComponent {
	categories: any = [];
	category: any = {
		name: "",
		slug: "",
		createdAt: moment().format(),
		updatedAt: moment().format(),
	};
	isUpdate: boolean = false;
	isKhongxacdinh = "undefine"
	constructor(private categoryService: CategoryService) {
		this.categoryService.getCategories().subscribe((response) => (this.categories = response.data));
	}

	formatDate(value: string) {
		return moment(value).format("DD-MM-YYYY HH:mm:ss");
	}

	updateSlug() {
		this.category.slug = slugify(this.category.name, "-");
	}

	handleDelete(id: string) {
		const check = confirm("Bạn có chắc muốn xóa không");
		console.log(id);
		if (check) {
			this.categoryService.deleteCategory(id).subscribe((data) => (this.categories = this.categories.filter((item: any) => item._id != id)));
		}
	}

	handleSubmit() {
		if (this.isUpdate) {
			this.categoryService.updateCategory(this.category._id, this.category).subscribe((data) => (this.categories = this.categories.map((item: any) => (item._id == this.category._id ? this.category : item))));
		} else {
			this.categoryService.createCategory(this.category).subscribe((data) => (this.categories = [this.category, ...this.categories]));
		}
	}

	handleUpdate(id: string) {
		this.isUpdate = true;
		this.category = this.categories.find((item: any) => item._id === id);
		console.log(this.category);
	}
}
