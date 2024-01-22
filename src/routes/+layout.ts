import { categories } from '$lib/categories.js';

export function load({url}) {
    const { pathname } = url;

    return {
        categories,
        pathname
    };
}