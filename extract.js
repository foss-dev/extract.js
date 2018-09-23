function extract(target, test) {

    let text = "";

    if(test) {
        text = target
    } else {
        text = document.querySelector(target).value ? document.querySelector(target).value : document.querySelector(target).innerText
    }

    const regexList = {
        numbers: /[+-]?\d+(?:\.\d+)?/g,
        letters: /[A-Za-z\u00C0-\u00FF +$]/g,
        special: /[-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#]/g,
        alnu: /[A-Za-z0-9\u00C0-\u00FF +$]/g,
        url: /(https?:\/\/[^ ]*)/g,
        mail: /([a-zA-Z0-9._+-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g,
        images: /\b(https?:\/\/\S+(?:png|jpe?g|gif)\S*)\b/g,
        h: /<h[1-6][^>]*>(.*?)<\/h[1-6]>/g,
        h1: /<h1[^>]*>(.*?)<\/h1>/g,
        h2: /<h2[^>]*>(.*?)<\/h2>/g,
        h3: /<h3[^>]*>(.*?)<\/h3>/g,
        h4: /<h4[^>]*>(.*?)<\/h4>/g,
        h5: /<h5[^>]*>(.*?)<\/h5>/g,
        h6: /<h6[^>]*>(.*?)<\/h6>/g,
    }

    function numbers() {
        let result = text.match(regexList['numbers'])

        return result
    }

    function letters(opt) {
        let result = text.match(regexList['letters'])

        if(opt && opt.join) {
            var char = opt.join.char ? opt.join.char : ""

            result = result.join(char)
        }

        return result
    }

    function special() {
        let result = text.match(regexList['special'])

        return result
    }

    function alnu() {
        let result = text.match(regexList['alnu'])

        return result
    }

    function url() {
        let result = text.match(regexList['url'])

        return result
    }

    function mail() {
        let result = text.match(regexList['mail'])

        return result
    }

    function images() {
        let result = text.match(regexList['images'])

        return result
    }

    function h(type) {
        var headingType = "h"

        if(type) {
            headingType = headingType + type
        }

        let result = text.match(regexList[headingType])

        return result
    }

    return {
        numbers: numbers,
        letters: letters,
        special: special,
        alnu: alnu,
        url: url,
        mail: mail,
        images: images,
        h: h
    }
}

export default extract;