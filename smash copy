#!/usr/bin/env node
import packageJson from "./package.json" assert { type: "json" }
import path from 'path'
import fs from 'fs'
import { encrypt,decrypt } from "./smashdata.js"
import { argv } from 'process'
const { name, description, version } = packageJson

const main = () => {

  const usage = () => {
    console.log(`\n${description} v${version}`)
    console.log(`usage: ${description} [options] <file>\n\nOptions:\n  -k <key>  Key to encode/decode the file\n  -v        Verbose mode\n  -h        Show this help message\n`)
    process.exit(0)
  }

  if (argv.length < 3 || argv.includes('-h') || argv.includes('--help')) {
    usage()
  }

  const tf = path.resolve(argv[argv.length - 1])
  const ef = tf + '.bin'
  const key = (argv.includes('-k')) ? argv[argv.indexOf('-k') + 1] : tf

  try {
    if (fs.existsSync(tf)) {
      if (argv.includes('-v')) console.log('encrypting...')
      fs.writeFileSync(ef, encrypt(key, "" + fs.readFileSync(tf)))
      fs.unlinkSync(tf)
      process.exit(0)
    } else if (fs.existsSync(ef)) {
      if (argv.includes('-v')) console.log('decrypting...')
      fs.writeFileSync(tf, decrypt(key, "" + fs.readFileSync(ef)))
      fs.unlinkSync(ef)
      process.exit(0)
    }
    throw new Error("File not found")
  } catch (e) {
    if(e.code=== "ERR_INVALID_ARG_TYPE") {
      console.error("\nError: Invalid Key\n\n")
    } else {
      console.error("\nError: " + e.message)
      usage()
    }
  }
}

main()