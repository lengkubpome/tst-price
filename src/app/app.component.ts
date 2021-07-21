import { Component } from '@angular/core';
import {
	AngularFirestore,
	AngularFirestoreCollection
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Product {
	name: string;
	currentPrice: number;
}
export interface ProductId extends Product {
	id: string;
}
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
	title = 'tst-price';
	productCollection: AngularFirestoreCollection<any>;
	products: Observable<any[]>;
	products2: Observable<any[]>;
	itemValue = '';

	constructor(private readonly afs: AngularFirestore) {
		this.productCollection = afs.collection<Product>('products');
		this.products = afs
			.collection('products')
			.valueChanges({ idField: 'products' });

		this.products2 = this.productCollection.snapshotChanges().pipe(
			map((actions) =>
				actions.map((a) => {
					const data = a.payload.doc.data() as Product;
					const id = a.payload.doc.id;
					return { id, ...data };
				})
			)
		);
	}

	onAdd() {
		this.productCollection.doc().set({ name: 'กระป๋อง', currentPrice: 4.8 });
	}
}
