export function categoryMenuBar(word: string): string {
    word = word.replace(/-/g, ' ');
    const wordSplit = word.toLowerCase().split(' ');
    for (let i = 0; i < wordSplit.length; i++) {
        wordSplit[i] = wordSplit[i].charAt(0).toUpperCase() + wordSplit[i].slice(1);
    }
    return wordSplit.join(' ');
}

export const themes = [
	'light',
	'dark',
	'cupcake',
	'corporate',
	'synthwave',
	'cyberpunk',
	'valentine',
	'halloween',
	'forest',
	'aqua',
	'lofi',
	'fantasy',
	'wireframe',
	'luxury',
	'dracula',
	'autumn',
	'business',
	'acid',
	'night',
	'coffee',
	'winter',
	'nord',
	'sunset',
	'butter',
	'aura',
	'tokyo'
]