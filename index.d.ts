/** @format */

export default class CLI {
  constructor(name: string)
  registerCommand(item: {command: string; description: string; callback: () => any}): void
  execute(): void
}
