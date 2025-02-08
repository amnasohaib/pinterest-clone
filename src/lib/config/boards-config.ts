export interface Board {
    name: string,
    img: string,
    isPrivate: boolean
}

export const Boards: Board[] = [
    {
        name: "Board 1",
        img: `https://picsum.photos/400/${Math.floor(
          Math.random() * 400 + 300
        )}`,
        isPrivate: true
    },
    {
        name: "Board 2",
        img: `https://picsum.photos/400/${Math.floor(
            Math.random() * 400 + 300
          )}`,
        isPrivate: false
    },
    {
        name: "Board 3",
        img: `https://picsum.photos/400/${Math.floor(
            Math.random() * 400 + 300
          )}`,
        isPrivate: false
    },
    {
        name: "Board 4",
        img: `https://picsum.photos/400/${Math.floor(
            Math.random() * 400 + 300
          )}`,
        isPrivate: true
    },
    {
        name: "Board 5",
        img: `https://picsum.photos/400/${Math.floor(
            Math.random() * 400 + 300
          )}`,
        isPrivate: false
    }
]