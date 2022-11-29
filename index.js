/** @format */

import {error, info} from 'console'
import {readFileSync} from 'fs'
import {argv} from 'process'

export default class CLI {
  #name
  #commandList
  constructor(name) {
    this.#name = name
    this.#commandList = [
      {
        command: '--version',
        description: 'Displays The Package Version',
        callback: this.#printVersion,
      },
      {
        command: '--help',
        description: 'Display This Help',
        callback: this.#printHelp.bind(this),
      },
    ]
  }
  #printVersion() {
    const text = readFileSync('package.json').toString()
    const version = JSON.parse(text).version
    info(version)
  }
  #printHelp() {
    const lineList = [
      `${this.#name} <argument>\n`,
      `Usage:\n`,
      ...this.#commandList.map(({command, description}) => `${this.#name} ${command}		${description}`),
    ]
    info(lineList.join('\n'))
  }
  registerCommand(item) {
    this.#commandList.push(item)
  }
  execute() {
    for (const {command, callback} of this.#commandList) {
      if (argv.at(2) === command) return callback()
    }
    error(`Unknown Argument: "${argv.at(2)}"`)
    this.#printHelp()
  }
}
