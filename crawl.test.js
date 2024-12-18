const { normalizeURL , getURLsFromHTML } = require('./crawl.js')// we require the ./crawl.js file and destructuring one function from this file note: ./ mean crawl.js is from the same project file
const { test, expect /**destructuring */} = require('@jest/globals')

test('normalizeURL strip protocol', ()=>{
    const input = 'https://example.com/path'
    const actual = normalizeURL(input)
    const expected = 'example.com/path'
    expect(actual).toEqual(expected)
    
})
test('normalizeURL strip trailing slash', ()=>{
    const input = 'https://example.com/path/'
    const actual = normalizeURL(input)
    const expected = 'example.com/path'
    expect(actual).toEqual(expected)
    
})
test('normalizeURL capitals', ()=>{
    const input = 'https://ExAMple.com/path/'
    const actual = normalizeURL(input)
    const expected = 'example.com/path'
    expect(actual).toEqual(expected)
    
})
test('normalizeURL strip http', ()=>{
    const input = 'http://example.com/path/'
    const actual = normalizeURL(input)
    const expected = 'example.com/path'
    expect(actual).toEqual(expected)
    
})
test('getURLsFromHTML absolute ' , ()=>{
    const inputHTMLBody = `
    <html>
        <body>
            <a href="https://example.com/path/">
                example
            </a>
        </body>
    </html>
    `
    const inputBaseURL = "https://example.com"
    const actual = getURLsFromHTML(inputHTMLBody,inputBaseURL)
    const expected = ["https://example.com/path/"]
    expect(actual).toEqual(expected)
})
test('getURLsFromHTML relative' , ()=>{
    const inputHTMLBody = `
    <html>
        <body>
            <a href="/path/">
                example
            </a>
        </body>
    </html>
    `
    const inputBaseURL = "https://example.com"
    const actual = getURLsFromHTML(inputHTMLBody,inputBaseURL)
    const expected = ["https://example.com/path/"]
    expect(actual).toEqual(expected)
})
test('getURLsFromHTML both' , ()=>{
    const inputHTMLBody = `
    <html>
        <body>
            <a href="/path1/">
                example 1
            </a>
            <a href="https://example.com/path2/">
                example 2
            </a>
        </body>
    </html>
    `
    const inputBaseURL = "https://example.com"
    const actual = getURLsFromHTML(inputHTMLBody,inputBaseURL)
    const expected = ["https://example.com/path1/","https://example.com/path2/"]
    expect(actual).toEqual(expected)
})
test('getURLsFromHTML invalid' , ()=>{
    const inputHTMLBody = `
    <html>
        <body>
            <a href="://invalid ">
                example 1
            </a>
            <a href="invalid">
                example 2
            </a>
        </body>
    </html>
    `
    const inputBaseURL = "https://example.com"
    const actual = getURLsFromHTML(inputHTMLBody,inputBaseURL)
    const expected = []
    expect(actual).toEqual(expected)
})

