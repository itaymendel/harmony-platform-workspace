import { loadAspect } from "@bitdev/harmony.testing.load-aspect";
import type { HomepageBrowser } from "./homepage.browser.runtime.js";
import { HomepageAspect } from "./homepage.aspect.js";

it('should retrieve the aspect', async () => {
    const homepage = await loadAspect<HomepageBrowser>(HomepageAspect, {
        runtime: 'browser',
    });

    expect(homepage).toBeTruthy();
});

