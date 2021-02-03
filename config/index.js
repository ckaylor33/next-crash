const dev = process.envNODE_ENV !== 'production'

export const server = dev
  ? 'http://localhost:3000'
  : 'https://next-crash-git-main.ckaylor33.vercel.app'
