export type Photo = {
    rank: number,
    src: string,
    categories: string[],
}

export type PhotoWidth = 'w720' | 'w1440' | 'w6000'

export type PhotoStats = {
    width: number
    height: number
    size: number
}

export type PhotoPlus = Photo & {
    avif: {
        w720: string
        w1440: string
        w6000: string
    },
    webp: {
        w720: string
        w1440: string
        w6000: string
    },
    jp2: {
        w720: string
        w1440: string
        w6000: string
    }
}