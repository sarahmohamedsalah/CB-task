import path from "path";

// Define the type for the 'env' function
type EnvFunction = {
  (key: string): string | undefined; // for strings
  bool: (key: string) => boolean; // for booleans
  int: (key: string) => number; // for integers
};

// Define valid database clients
type DatabaseClient = "mysql" | "postgres" | "sqlite";

export default ({ env }: { env: EnvFunction }) => {
  // Explicitly declare the client type
  const client: DatabaseClient = (env("DATABASE_CLIENT") ||
    "sqlite") as DatabaseClient;

  const connections = {
    mysql: {
      connection: {
        host: env("DATABASE_HOST") || "localhost",
        port: env.int("DATABASE_PORT") || 3306,
        database: env("DATABASE_NAME") || "strapi",
        user: env("DATABASE_USERNAME") || "strapi",
        password: env("DATABASE_PASSWORD") || "strapi",
        ssl: env("DATABASE_SSL") === "true" && {
          key: env("DATABASE_SSL_KEY"),
          cert: env("DATABASE_SSL_CERT"),
          ca: env("DATABASE_SSL_CA"),
          capath: env("DATABASE_SSL_CAPATH"),
          cipher: env("DATABASE_SSL_CIPHER"),
          rejectUnauthorized:
            env("DATABASE_SSL_REJECT_UNAUTHORIZED") === "true",
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
        ssl: env("DATABASE_SSL") === "true" && {
          key: env("DATABASE_SSL_KEY"),
          cert: env("DATABASE_SSL_CERT"),
          ca: env("DATABASE_SSL_CA"),
          capath: env("DATABASE_SSL_CAPATH"),
          cipher: env("DATABASE_SSL_CIPHER"),
          rejectUnauthorized:
            env("DATABASE_SSL_REJECT_UNAUTHORIZED") === "true",
        },
        schema: env("DATABASE_SCHEMA") || "public",
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
          env("DATABASE_FILENAME") || ".tmp/data.db"
        ),
      },
      useNullAsDefault: true,
    },
  };

  return {
    connection: {
      client,
      ...connections[client], // Now TypeScript knows `client` will always be "mysql", "postgres", or "sqlite"
      acquireConnectionTimeout: env.int("DATABASE_CONNECTION_TIMEOUT") || 60000,
    },
  };
};
