# extract.js

Extract helper for JavaScript.

# Usage

All methods are will return array.

## Numbers

```javascript

const el = "1 + 2 Apple"

extract(el, true).numbers()
```

**or**

```javascript
extract("#test").numbers()
```

## Letters

```javascript

const el = "1 + 2 Apple"

extract(el, true).letters()

extract(el, true).letters({ "join": true }) // Apple

extract(el, true).letters({ "join": { "char": "+" }) //A+p+p+l+e
```

**or**

```javascript
extract("#test").letters()

extract("#test").letters({ "join": true }) // Apple

extract("#test").letters({ "join": { "char": "+" }) //A+p+p+l+e
```

## Special Characters

```javascript

const el = "A &%1 ' {}]"

extract(el, true).special()
```

**or**

```javascript
extract("#test").special()
```

## URL Adresses

```javascript

const el = "I have two websites. These are https://aligoren.com and https://medium.com/@aligoren"

extract(el, true).url()
```

**or**

```javascript
extract("#test").url()
```

## E-Mail Adresses

```javascript

const el = "I have two email. These are admin@aligoren.com and goren.ali@yandex.com"

extract(el, true).mail()
```

**or**

```javascript
extract("#test").mail()
```

## Images

```javascript

const el = "<img src='http://site.com/me.jpg' /> and <img src='https://www.google.com/logo.png' />"

extract(el, true).images()
```

**or**

```javascript
extract("#test").images()
```

## Heading Tags

**h(1..6 => optional)**

```javascript

const el = "<h1>My name is ali</h1> <h2>Description here</h2> and <h3>Subtitle</h3> and <h1>Post title</h1>"

extract(el, true).h(1) // ['<h1>My name is ali</h1>', '<h1>Post title</h1>']

extract(el, true).h(2) // ['<h2>Description here</h2>']

extract(el, true).h(3) // ['<h3>Subtitle</h3>']

extract(el, true).h() // ['<h1>My name is ali</h1>', '<h2>Description here</h2>', '<h3>Subtitle</h3>', '<h1>Post title</h1>']
```

**or**

```javascript
extract("#test").h(1) // ['<h1>My name is ali</h1>', '<h1>Post title</h1>']

extract("#test").h(2) // ['<h2>Description here</h2>']

extract("#test").h(3) // ['<h3>Subtitle</h3>']

extract("#test").h() // ['<h1>My name is ali</h1>', '<h2>Description here</h2>', '<h3>Subtitle</h3>', '<h1>Post title</h1>']
```

# Test

All tests are located under the test folder. In order to run test, you need to install jest.

```bash
npm run test
```