import {Injectable} from '@angular/core';
import {Category} from '../model/Category';
import {TestData} from '../data/TestData';

//  providedIn: 'root' область доступа: 'начиная с корня'

@Injectable({
  providedIn: 'root'
})

export class DataHandlerService {
  constructor() {
  }

  // получает данные из массива
  getCategories(): Category[] {
    return TestData.categories;
  }
}

