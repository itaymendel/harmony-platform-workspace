import { SymphonyPlatformAspect, SymphonyPlatformBrowser } from "@bitdev/symphony.symphony-platform";
import type { HomepageConfig } from "./homepage-config.js";


export class HomepageBrowser {
    constructor(private config: HomepageConfig) { }

    static dependencies = [SymphonyPlatformAspect];

    static defaultConfig: HomepageConfig = {};

    static async provider([symphonyPlatform]: [
        SymphonyPlatformBrowser
    ], config: HomepageConfig) {
        const homepage = new HomepageBrowser(config);

        symphonyPlatform.registerRoute([
            {
                path: '/',
                component: () => {
                    return <h1>AMAZING HOMEPAGE IS AMAZING</h1>;
                }
            }
        ]);

        return homepage;
    }
}

export default HomepageBrowser;

