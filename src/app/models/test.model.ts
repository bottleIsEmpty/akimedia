
export class User{
    id: number;
    login: string;
    password: string;
    email: string;
    photo?: string;
}

export class FilmComment {
    id: number;
    filmId: number;
    date: Date;
    commentedBy: {
        id: number,
        login: string,
        email: string
    };
    commentType: string;
    comment: string;
}