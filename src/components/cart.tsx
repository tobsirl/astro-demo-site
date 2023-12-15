import { useStore } from '@nanostores/solid';
import { $cart, removeFromCart, subtotal } from '../stores/cart';
import { Show, createSignal } from 'solid-js';
import styles from './cart.module.css';

function formatCurrency(amount: number) {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	}).format(amount);
}
