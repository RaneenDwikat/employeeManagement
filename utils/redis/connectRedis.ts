import {createClient} from 'redis'

export const redis=createClient()


export  async function connectRedis ():Promise<void> {
    try {
        const conn = await redis.connect()
        console.log('Connected with cache')
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}