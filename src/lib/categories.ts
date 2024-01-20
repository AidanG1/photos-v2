import { photos } from '$lib/photos'

const categoriesSet: Set<string> = new Set()

for (const photo of photos) {
    for (const category of photo['categories']) {
        categoriesSet.add(category.toLowerCase())
    }
}

// convert to sorted list
const categories = Array.from(categoriesSet)
categories.sort()

export { categories }