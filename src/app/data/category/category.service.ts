import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CategoryInterface } from "./category.interface";

@Injectable()
export class CategoryService {

  public constructor(private http: HttpClient) {
  }

  public getCategories(): Observable<CategoryInterface[]> {
    return this.http.get<CategoryInterface[]>('/api/categories');
  }
}
