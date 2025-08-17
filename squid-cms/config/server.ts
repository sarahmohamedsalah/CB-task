import path from "path";

// Define the type for the 'env' function
type EnvFunction = {
  (key: string): string | undefined; // for strings
  bool: (key: string) => boolean; // for booleans
  int: (key: string) => number; // for integers
};

export default ({ env }: { env: EnvFunction }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET"),
    },
  },
  database: {
    client: env("DATABASE_CLIENT", "sqlite"),
    connection: {
      filename: path.join(
        __dirname,
        "..",
        "..",
        env("DATABASE_FILENAME", ".tmp/data.db")
      ),
    },
    useNullAsDefault: true,
  },
});
