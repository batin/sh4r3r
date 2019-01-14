# Usage


```JavaScript
const sharer = require('sh4r3r')

let input = {
  text: 'this is my first package.',
  url: 'https://btnerylmz.me',
  hashtags: ['Node.js', 'JavaScript', 'npm']
}

console.log(sharer(input, 'twitter'))
// Returns: http://twitter.com/share?text=this%20is%20my%20first%20package.&url=https://btnerylmz.me&hashtags=Node.js,JavaScript,npm
```
