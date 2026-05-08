import dotenv from "dotenv";
dotenv.config();

const config = () => {
  return {
    PORT: process.env.PORT || 3001,
    NODE_LEVEL: process.env.NODE_LEVEL || "development",
    LOG_LEVEL: process.env.LOG_LEVEL || "info",
    DATABASE_URL: process.env.DATABASE_URL,
    REDIS_URL: process.env.REDIS_URL,
    ALLOWED_ORIGINS: process.env.ALLOWED_ORIGINS,
  };
};

const AppConfig = config();

export default AppConfig;