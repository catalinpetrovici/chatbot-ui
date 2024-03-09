import { z } from "zod"

const envVariables = z.object({
  NEXT_PUBLIC_SUPABASE_URL: z.string().min(1, { message: "Required" }),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1, { message: "Required" }),
  SUPABASE_SERVICE_ROLE_KEY: z.string().min(1, { message: "Required" }),
  OPENAI_API_KEY: z.string().min(1, { message: "Required" })
})

envVariables.parse(process.env)

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVariables> {}
  }
}
