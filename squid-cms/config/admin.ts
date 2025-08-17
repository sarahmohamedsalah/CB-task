// Define the type for the 'env' function
type EnvFunction = (key: string) => string | boolean | undefined;

export default ({ env }: { env: EnvFunction }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET"), // This is fine as it is
  },
  apiToken: {
    salt: env("API_TOKEN_SALT"),
  },
  transfer: {
    token: {
      salt: env("TRANSFER_TOKEN_SALT"),
    },
  },
  secrets: {
    encryptionKey: env("ENCRYPTION_KEY"),
  },
  flags: {
    // Check if the environment variable is set, and if not, use the default value
    nps: env("FLAG_NPS") === "true", // Convert the string to boolean
    promoteEE: env("FLAG_PROMOTE_EE") === "true", // Convert the string to boolean
  },
});
