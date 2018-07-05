var books = [
    {
        info : {
            name: 'JavaScript, the sequel',
            author: 'nxtra'
        },
        id: 1,
        pages: 470
    },
    {
        info : {
            name: 'Angular5 reacts!',
            author: 'nvh'
        },
        id: 2,
        pages: 804
    },
    {
        info : {
            name: 'JavaScript, the sequel',
            author: 'nixtra'
        },
        name: 'NodeJS, tie it up',
        id: 3,
        pages: 802
    },
    {
        info : {
            name: 'Python, wrestling the snake',
            author: 'xtra'
        },
        id: 4,
        pages: 678
    },
    {
        info : {
            name: 'Java, reinvented',
            author: 'pepper'
        },
        id: 5,
        pages: 1023
    }
]

result = []
books
    .filter(book => {return book.pages >= 700})
    .map(book => {return book.info})
    .forEach(book => {result.push(book)})

console.log(JSON.stringify(result, null, 2))