const coding = ["java", "python", "ruby", "javaScript", "c++"]

// let's try to return values using forEach

const values = coding.forEach( lang => {
    return lang;
})

console.log(values)
// and we got undefined because forEach doesn't return any values 

// to return values we have other high order functions like filter(), map(), reduce()

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const result = nums.filter( num => {
    return num > 5;
})
console.log(result)

// lets take a good array as an example
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// now let's filter books whose genre is Non-Fiction
const nonFictionBooks = books.filter( bk => bk.genre === 'Non-Fiction')
console.log(nonFictionBooks)

// now let's filter books which got published after the year 2000
const newPublished = books.filter( bk => bk.publish >= 2000 )
console.log(newPublished)

// filter books which are of Science genre and published after 2000
const historyBk  = books.filter( bk => (bk.genre === "Science" && bk.publish >= 2000))
console.log(historyBk)

