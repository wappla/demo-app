#!/usr/bin/env node --experimental-specifier-resolution=node
import { program } from 'commander'
import dbResetCommand from './dbResetCommand'

program
    .command('db:reset')
    .action(dbResetCommand)
    .option('-e, --environment <environment>')

program.parse(process.argv)
