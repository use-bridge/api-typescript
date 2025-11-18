import { BridgeApiEnvironment } from "./environments.js";
import { BridgeApiClient as FernClient } from "./Client.js";

export class BridgeApiClient extends FernClient {
    constructor(options: FernClient.Options) {
        super({
            ...options,
            environment: normalizeEnvironment(options.environment),
        });
    }
}

function normalizeEnvironment(environment?: FernClient.Options["environment"]): FernClient.Options["environment"] {
    if (!environment || typeof environment === "function") return environment;

    // We can assume that environment is a plain string here; we check above for
    // functions, so this should be safe
    const env = environment as unknown as string;

    // Convert any environment names to their BridgeApiEnvironment values
    // Otherwise, just use the environment as-is
    switch (env.toLowerCase()) {
        case "production":
            return BridgeApiEnvironment.Production;
        case "sandbox":
            return BridgeApiEnvironment.Sandbox;
        default:
            return env;
    }
}
