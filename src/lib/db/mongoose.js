 import mongoose from 'mongoose'
 import {env} from "../config/env.js";

 console.log(env.db.database)
 mongoose.connect(env.db.database)