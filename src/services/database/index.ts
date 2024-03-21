// dependencies
// eslint-disable-next-line import/no-unresolved, import/extensions
import { PrismaClient as PrismaClientModule } from "../../services/database/prisma/generated/client";

// envs
const { NODE_ENV, DATABASE_URL } = process.env;

const ConnectionDB: PrismaClientModule = new PrismaClientModule({
  datasources: {
    db: { url: `${DATABASE_URL}` },
  },
  log: NODE_ENV !== "production" ? [{ emit: "stdout", level: "query" }] : [],
});

export { ConnectionDB };
