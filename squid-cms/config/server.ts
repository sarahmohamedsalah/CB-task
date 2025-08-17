import path from "path";

// Define the type for the 'env' function
type EnvFunction = {
  (key: string): string | undefined; // for strings
  bool: (key: string, defaultValue?: boolean) => boolean; // for booleans
  int: (key: string, defaultValue?: number) => number; // for integers
  array: (key: string) => string[]; // for arrays
};

export default ({ env }: { env: EnvFunction }) => ({
  host: env("HOST") || "0.0.0.0", // Fallback for string value
  port: env.int("PORT", 1337), // Integer with default value
  app: {
    keys: env.array("APP_KEYS"),
  },
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET") || "", // Default to empty string if not found
    },
  },
  database: {
    client: env("DATABASE_CLIENT") || "sqlite", // Handle default for string
    connection: {
      filename: path.join(
        __dirname,
        "..",
        "..",
        env("DATABASE_FILENAME", ".tmp/data.db") // Default for filename
      ),
    },
    useNullAsDefault: true,
  },
});
