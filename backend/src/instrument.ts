import "dotenv/config";
import * as Sentry from "@sentry/node";
import { nodeProfilingIntegration } from "@sentry/profiling-node";
import { getEnv } from "./lib/env";

const env = getEnv();

const dsn = env.SENTRY_DSN;

// node profiling integration is for performance debugging in Sentry.

if (dsn) {
  Sentry.init({
    dsn,
    environment: env.NODE_ENV ?? "development",
    integrations: [nodeProfilingIntegration()],
    enableLogs: true,
    tracesSampleRate: 1.0,
    profileSessionSampleRate: 1.0,
    profileLifecycle: "trace",
    sendDefaultPii: true,
  });
}
