import path from "path";

// Define the type for the 'env' function
type EnvFunction = {
  (key: string): string | undefined; // for strings
  bool: (key: string, defaultValue?: boolean) => boolean; // for booleans with a default value
  int: (key: string, defaultValue?: number) => number; // for integers with a default value
  array: (key: string) => string[]; // for arrays
};

export default ({ env }: { env: EnvFunction }) => ({
  host: env("HOST") || "0.0.0.0", // Handle string defaults manually
  port: env.int("PORT", 1337), // The integer type expects a default value
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
