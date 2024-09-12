import { env } from '@/env'
import { app } from './app'

app
  .listen({
    port: env.APP_PORT,
  })
  .then(() => {
    console.log(`Server is running on port ${env.APP_PORT}`)
  })
