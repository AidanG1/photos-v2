import {photoCategories} from '$lib/photos';
import { categories } from '$lib/categories';
import { redirect } from '@sveltejs/kit';

export function load({ params }) {
    if (!categories.includes(params.category)) redirect(302, '/')

    // make sure index is within bounds
    const index = parseInt(params.index)

    if (index < 0 || index >= photoCategories[params.category].length) {
        redirect(302, '/')
    }

    return {
        photos: photoCategories[params.category],
        category: params.category,
        index
    };
}