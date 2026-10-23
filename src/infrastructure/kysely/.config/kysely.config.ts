import { defineConfig } from 'kysely-ctl'
import KyselyAdapter from "../connection";

const dbDialect = KyselyAdapter()

export default defineConfig({
    kysely: dbDialect.getdb('default')
})
