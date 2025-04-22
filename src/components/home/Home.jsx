import { useState } from 'react';
import './Home.css';
import Cart from '../state/Cart';

const Home = () => {
	const [productName, setProductName] = useState('');
	const [price, setPrice] = useState('');
	const [cartItems, setCartItems] = useState([]);

	const handleAddToCart = (e) => {
		e.preventDefault();
		if (productName && price) {
			const newProduct = {
				id: Date.now(),
				name: productName,
				price: parseFloat(price),
			};
			setCartItems([...cartItems, newProduct]);
			setProductName('');
			setPrice('');
		}
		return;
	};

	return (
		<div className='container'>
			<h1>Add Product</h1>
			<form className='form' onSubmit={handleAddToCart}>
				<label htmlFor='productName'>Product Name</label>
				<input
					type='text'
					value={productName}
					onChange={(e) => {
						setProductName(e.target.value);
					}}
				/>
				<label htmlFor='price'>Product Name</label>
				<input
					type='number'
					value={price}
					onChange={(e) => {
						setPrice(e.target.value);
					}}
				/>
				<button className='btn_submit' type='submit'>
					Add to Cart
				</button>
			</form>
			<Cart products={cartItems} setProducts={setCartItems} />
		</div>
	);
};

export default Home;
