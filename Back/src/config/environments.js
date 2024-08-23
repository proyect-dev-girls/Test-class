import "dotenv/config";

export const environments = {
  PORT: 3000,
  DB: {
    DB_NAME: "bd_test_class",
    DB_HOST: "localhost",
    DB_DIALECT: "mysql",
    DB_USER: "root",
    DB_PASSWORD: "",
    DB_PORT: 3306,
  },
};
