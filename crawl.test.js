const { normalizeURL } = require('./crawl.js')// we require the ./crawl.js file and destructuring one function from this file note: ./ mean crawl.js is from the same project file
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

