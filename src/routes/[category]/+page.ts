import {photoCategories} from '$lib/photos';
import { categories } from '$lib/categories';
import { redirect } from '@sveltejs/kit';

export function load({ params }) {
    if (!categories.includes(params.category)) redirect(302, '/')

    return {
        photos: photoCategories[params.category]
    };
}