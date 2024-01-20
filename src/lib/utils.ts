export function categoryMenuBar(word: string): string {
    word = word.replace(/-/g, ' ');
    const wordSplit = word.toLowerCase().split(' ');
    for (let i = 0; i < wordSplit.length; i++) {
        wordSplit[i] = wordSplit[i].charAt(0).toUpperCase() + wordSplit[i].slice(1);
    }
    return wordSplit.join(' ');
}