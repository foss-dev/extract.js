import extract from '../extract'

test('This should return only numbers', () => {

    const el = "1 + 2 Apple"

    expect(extract(el, true).numbers()).toEqual(expect.arrayContaining(['1', '2']))

    expect(Array.isArray(extract(el, true).numbers())).toBe(true)
})

test('This should not return numbers', () => {

    const el = "one + two Apple"

    expect(extract(el, true).numbers()).not.toEqual(expect.arrayContaining(['1', '2']))
})

test('This should return only letters', () => {
    const el = "My name is Ali GÖREN. I'm 25 yo."

    expect(extract(el, true).letters({ "join": true })).toEqual("My name is Ali GÖREN Im  yo")

    expect(Array.isArray(extract(el, true).letters())).toBe(true)
})

test('This should not return letters', () => {
    const el = "25 25 25"

    expect(extract(el, true).letters()).toHaveLength(2)

    expect(extract(el, true).letters()).toEqual(expect.arrayContaining([' ', ' ']))

    expect(Array.isArray(extract(el, true).letters())).toBe(true)
})

test('This should return special characters', () => {
    const el = "A &%1 ' {}]"

    expect(extract(el, true).special()).toEqual(expect.arrayContaining(['&', '%', '{', '}', ']']))

    expect(Array.isArray(extract(el, true).special())).toBe(true)
})

test('This should return alpha numeric characters', () => {
    const el = "John & Jane is a character who from USA. They're a secret for 100+ years."

    expect(extract(el, true).alnu()).toEqual(expect.arrayContaining(['J', 'o', 'h', 'n', ' ', 'J', 'a', 'n', 'e', '1', '0', '0']))

    expect(Array.isArray(extract(el, true).alnu())).toBe(true)
})

test('This should return two urls', () => {
    const el = "I have two websites. These are https://aligoren.com and https://medium.com/@aligoren"

    expect(extract(el, true).url()).toEqual(expect.arrayContaining(['https://aligoren.com', 'https://medium.com/@aligoren']))

    expect(Array.isArray(extract(el, true).url())).toBe(true)
})

test('This should return two email adresses', () => {
    const el = "I have two email. These are admin@aligoren.com and goren.ali@yandex.com"

    expect(extract(el, true).mail()).toEqual(expect.arrayContaining(['admin@aligoren.com', 'goren.ali@yandex.com']))

    expect(Array.isArray(extract(el, true).mail())).toBe(true)
})

test('This should return two image adresses', () => {
    const el = "<img src='http://site.com/me.jpg' /> and <img src='https://www.google.com/logo.png' />"

    expect(extract(el, true).images()).toEqual(expect.arrayContaining(['http://site.com/me.jpg', 'https://www.google.com/logo.png']))

    expect(Array.isArray(extract(el, true).images())).toBe(true)
})

test('This should return h1 tags with html', () => {
    const el = "<h1>My name is ali</h1> <h2>Description here</h2> and <h3>Subtitle</h3> and <h1>Post title</h1>"

    expect(extract(el, true).h(1)).toEqual(expect.arrayContaining(['<h1>My name is ali</h1>', '<h1>Post title</h1>']))

    expect(Array.isArray(extract(el, true).h(1))).toBe(true)
})

test('This should return h2 tags with html', () => {
    const el = "<h1>My name is ali</h1> <h2>Description here</h2> and <h3>Subtitle</h3> and <h1>Post title</h1>"

    expect(extract(el, true).h(2)).toEqual(expect.arrayContaining(['<h2>Description here</h2>']))

    expect(Array.isArray(extract(el, true).h(2))).toBe(true)
})

test('This should return h3 tags with html', () => {
    const el = "<h1>My name is ali</h1> <h2>Description here</h2> and <h3>Subtitle</h3> and <h1>Post title</h1>"

    expect(extract(el, true).h(3)).toEqual(expect.arrayContaining(['<h3>Subtitle</h3>']))

    expect(Array.isArray(extract(el, true).h(3))).toBe(true)
})

test('This should return all heading tags with html', () => {
    const el = "<h1>My name is ali</h1> <h2>Description here</h2> and <h3>Subtitle</h3> and <h1>Post title</h1>"

    expect(extract(el, true).h()).toEqual(expect.arrayContaining(
        ['<h1>My name is ali</h1>', '<h2>Description here</h2>', 
        '<h3>Subtitle</h3>', '<h1>Post title</h1>']))

    expect(Array.isArray(extract(el, true).h())).toBe(true)
})