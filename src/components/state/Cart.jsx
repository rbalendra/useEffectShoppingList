import React, { useEffect, useState } from 'react';
import styles from './Cart.module.css';
import { data } from '../../data/dataset';

const Cart = ({ products, setProducts }) => {
	const [totalProducts, setTotalProducts] = useState(products.length);

	useEffect(() => {
		setTotalProducts(products.length);
	}, [products]);

	const handleDelete = (id) => {
		const updateProducts = products.filter((x) => x.id !== id); //x.id is not equal to id passed
		setProducts(updateProducts);
	};
	const handleDeleteAll = () => {
		setProducts([]);
	};

	if (products.length === 0) {
		return <h1>Card is Empty</h1>;
	}

	return (
		<div className={styles.cards}>
			<h1>Items in Cart {totalProducts}</h1>
			{products.map((item) => {
				return (
					<div className={styles.card} key={item.id}>
						<h5>{item.name}</h5>
						<span>${item.price}</span>
						<button
							className={styles.btnDelete}
							onClick={() => {
								handleDelete(item.id);
							}}>
							DELETE
						</button>
					</div>
				);
			})}
			{products.length > 0 && (
				<button className={styles.btnDelete} onClick={handleDeleteAll}>
					DELETE ALL
				</button>
			)}
		</div>
	);
};

export default Cart;

// const Cart = () => {
// 	const [products, setProducts] = useState(data);
// 	const [totalProducts, setTotalProducts] = useState(data.length);

// 	const handleDeleteAll = () => {
// 		setProducts([]);
// 		setTotalProducts(0);
// 	};

// 	const handleDelete = (id) => {
// 		const updateProducts = products.filter((x) => x.id !== id); //x.id is not equal to id passed
// 		setProducts(updateProducts);
// 		setTotalProducts(updateProducts.length);
// 	};

// 	const handleReset = () => {
// 		setProducts(data);
// 		setTotalProducts(data.length);
// 	};

// 	return (
// 		<div className={styles.cards}>
// 			<h1>Items in Cart {totalProducts}</h1>
// 			{products.map((item) => {
// 				return (
// 					<div className={styles.card} key={item.id}>
// 						<h5>{item.name}</h5>
// 						<span>${item.price}</span>
// 						<button
// 							className={styles.btnDelete}
// 							onClick={() => {
// 								handleDelete(item.id);
// 							}}>
// 							DELETE
// 						</button>
// 					</div>
// 				);
// 			})}
// 			{products.length > 0 && (
// 				<button className={styles.btnDelete} onClick={handleDeleteAll}>
// 					DELETE ALL
// 				</button>
// 			)}
// 			<button
// 				className={styles.btnDelete}
// 				style={{ backgroundColor: 'black' }}
// 				onClick={handleReset}>
// 				RESET
// 			</button>
// 		</div>
// 	);
// };

// export default Cart;
