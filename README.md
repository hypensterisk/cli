# CLI
Simple Module To Create CLI App
# Example
```javascript
import CLI from 'cli'

const cli = new CLI('package')

cli.registerCommand({
  command: 'greeting',
  description: 'Displays "Hello World!" On The Screen',
  callback: () => console.log('Hello World!'),
})

cli.execute()
```