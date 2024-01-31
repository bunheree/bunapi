
async function hanleCrawler(url) {
    const { PlaywrightCrawler } = require('crawlee');

    var result = {};
    const crawler = new PlaywrightCrawler({
        requestHandler: async ({ page }) => {
            // Wait for the actor cards to render.
            await page.waitForSelector('.cr-public-earned-badge-grid-item')
            // Execute a function in the browser which targets
            // the actor card elements and allows their manipulation.

            const icons = await page.$$eval('.c-badge img', (els) => {
                // Extract text content from the actor cards
                return els.map((el) => el.src)
            })

            const titles = await page.$$eval('.c-badge .cr-standard-grid-item-content__title', (els) => {
                // Extract text content from the actor cards
                return els.map((el) => el.textContent)
            })

            const subTitles = await page.$$eval('.c-badge .cr-standard-grid-item-content__subtitle', (els) => {
                // Extract text content from the actor cards
                return els.map((el) => el.textContent)
            })


            // Using a loop to create an object
            const badges = icons.map((icon, index) => ({
                icon: icon,
                title: titles[index],
                from: subTitles[index]
            }))

            result = badges
        },
    });

    // Start the crawler with the provided URLs
    await crawler.run([url]);

    return result
}

export async function getCredlyBadges(url) {
    return await hanleCrawler(url)
}