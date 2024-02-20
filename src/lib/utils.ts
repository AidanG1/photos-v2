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
	'bumblebee',
	'emerald',
	'corporate',
	'synthwave',
	'retro',
	'cyberpunk',
	'valentine',
	'halloween',
	'garden',
	'forest',
	'aqua',
	'lofi',
	'pastel',
	'fantasy',
	'wireframe',
	'black',
	'luxury',
	'dracula',
	'cmyk',
	'autumn',
	'business',
	'acid',
	'lemonade',
	'night',
	'coffee',
	'winter',
	'dim',
	'nord',
	'sunset',
	'butter',
	'aura',
	'tokyo'
]