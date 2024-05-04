// require('dotenv').config({path: './env'})
import DbConnect from './db/index.js'
import dotenv from 'dotenv'

dotenv.config({path: '.env'})
DbConnect()