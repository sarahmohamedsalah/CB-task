import path from "path";

// Define the type for the 'env' function
type EnvFunction = {
  (key: string): string | undefined; // for strings
  bool: (key: string) => boolean; // for booleans
  int: (key: string) => number; // for integers
};

export default ({ env }: { env: EnvFunction }) => {
  const client = env("DATABASE_CLIENT") || "sqlite"; // Use a fallback value if env() returns undefined

  const connections = {
    mysql: {
      connection: {
        host: env("DATABASE_HOST") || "localhost", // Default fallback
        port: env.int("DATABASE_PORT") || 3306, // Default fallback
        database: env("DATABASE_NAME") || "strapi", // Default fallback
        user: env("DATABASE_USERNAME") || "strapi", // Default fallback
        password: env("DATABASE_PASSWORD") || "strapi", // Default fallback
        ssl: env.bool("DATABASE_SSL") && {
          key: env("DATABASE_SSL_KEY"),
          cert: env("DATABASE_SSL_CERT"),
          ca: env("DATABASE_SSL_CA"),
          capath: env("DATABASE_SSL_CAPATH"),
          cipher: env("DATABASE_SSL_CIPHER"),
          rejectUnauthorized: env.bool(
            "DATABASE_SSL_REJECT_UNAUTHORIZED",
            true
          ),
        },
      },
      pool: {
        min: env.int("DATABASE_POOL_MIN") || 2,
        max: env.int("DATABASE_POOL_MAX") || 10,
      },
    },
    postgres: {
      connection: {
        connectionString: env("DATABASE_URL"),
        host: env("DATABASE_HOST") || "localhost",
        port: env.int("DATABASE_PORT") || 5432,
        database: env("DATABASE_NAME") || "strapi",
        user: env("DATABASE_USERNAME") || "strapi",
        password: env("DATABASE_PASSWORD") || "strapi",
        ssl: env.bool("DATABASE_SSL") && {
          key: env("DATABASE_SSL_KEY"),
          cert: env("DATABASE_SSL_CERT"),
          ca: env("DATABASE_SSL_CA"),
          capath: env("DATABASE_SSL_CAPATH"),
          cipher: env("DATABASE_SSL_CIPHER"),
          rejectUnauthorized: env.bool(
            "DATABASE_SSL_REJECT_UNAUTHORIZED",
            true
          ),
        },
        schema: env("DATABASE_SCHEMA") || "public", // Default fallback
      },
      pool: {
        min: env.int("DATABASE_POOL_MIN") || 2,
        max: env.int("DATABASE_POOL_MAX") || 10,
      },
    },
    sqlite: {
      connection: {
        filename: path.join(
          __dirname,
          "..",
          "..",
          env("DATABASE_FILENAME") || ".tmp/data.db" // Default fallback
        ),
      },
      useNullAsDefault: true,
    },
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: env.int("DATABASE_CONNECTION_TIMEOUT") || 60000, // Default fallback
    },
  };
};
