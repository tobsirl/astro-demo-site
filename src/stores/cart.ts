import { computed, map } from 'nanostores';

export const $cart = map<Record<number, CartItem>>({});

export function addToCart(item: ShopItem) {
	const cartItem = $cart.get()[item.id];
	const quantity = cartItem ? cartItem.quantity : 0;

	$cart.setKey(item.id, {
		item,
		quantity: quantity + 1,
	});
}
