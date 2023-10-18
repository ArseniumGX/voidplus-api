export const environment = {
  PORT: parseInt(process.env.PORT) | 3001,
  SECRET_KEY: String(process.env.SECRET_KEY)
};
