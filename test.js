const share = require('./index')

let input = {
  text: 'this is my first package.',
  url: 'https://btnerylmz.me',
  hashtags: ['Node.js', 'JavaScript', 'npm']
}
let expectedOutput = 'http://twitter.com/share?text=this%20is%20my%20first%20package.&url=https://btnerylmz.me&hashtags=Node.js,JavaScript,npm'
console.log(share(input, 'twitter') === expectedOutput)
