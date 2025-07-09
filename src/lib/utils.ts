export function categoryMenuBar(word: string): string {
	word = word.replace(/-/g, ' ')
	const wordSplit = word.toLowerCase().split(' ')
	for (let i = 0; i < wordSplit.length; i++) {
		wordSplit[i] = wordSplit[i].charAt(0).toUpperCase() + wordSplit[i].slice(1)
	}
	return wordSplit.join(' ')
}

export const themes = [
	'light',
	'dark',
	'synthwave',
	'cyberpunk',
	'forest',
	'aqua',
	'business',
	'acid',
	'nord',
	'caramellatte',
	'abyss'
]

export const makeAltText = (categories: string[]): string => {
	if (categories.length === 0) {
		return 'No categories'
	}
	if (categories.length === 1) {
		return `Category: ${categories[0]}`
	}
	if (categories.length === 2) {
		return `Categories: ${categories[0]} and ${categories[1]}`
	}
	return `Categories: ${categories.slice(0, -1).join(', ')}, and ${categories[categories.length - 1]}`
}
