export const COMMENTS = [
    {
        id: 1,
        film: 1,
        date: new Date(),
        commentedBy: {
            id: 1,
            login: 'Михаил',
            email: 'mikhail@gmail.com'
        },
        commentType: -1,
        comment: 'Фильм не понравился'
    },
    {
        id: 2,
        film: 1,
        date: new Date(),
        commentedBy: {
            id: 3,
            login: 'Михаил',
            email: 'mikhail@gmail.com'
        },
        commentType: 1,
        comment: 'Фильм понравился'
    },
    {
        id: 1,
        film: 1,
        date: new Date(),
        commentedBy: {
            id: 123456780,
            login: 'Михаил',
            email: 'mikhail@gmail.com'
        },
        commentType: 0,
        comment: 'Фильм оставил равнодушные чувства'
    }
];
