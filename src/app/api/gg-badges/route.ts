import puppeteer from 'puppeteer'
import { NextResponse } from 'next/server'

/**
 * @swagger
 * /api/gg-badges:
 *   get:
 *     summary: Get a list of Google Developer badges
 *     description: Returns the list Google Developer badges
 *     parameters:
 *       - name: userid
 *         in: query
 *         description: Profile user name
 *         required: true
 *         schema:
 *           type: string
 *           default: bunhere
 *     responses:
 *       200:
 *         description: A JSON array of Google Developer badges
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       icon:
 *                         type: string
 *                       title:
 *                         type: string
 *                       date:
 *                         type: string
 *                 message:
 *                   type: string
 *                   example: Success
 */
export async function GET(req: Request) {
    const { searchParams } = new URL(req.url)
    const userid = searchParams.get('userid')
    try {
        if (!userid) {
            return NextResponse.json({ message: 'Invalid user profile id' }, { status: 500 })
        }
        const url = 'https://developers.google.com/profile/u/' + userid
        // Start the crawler
        const browser = await puppeteer.launch()
        const page = await browser.newPage()
        await page.goto(url, { waitUntil: 'networkidle2' })

        const results = await page.evaluate(() => {
            /// Select all elements with the class 'badge-icon' and 'img'
            const iconElements = document.querySelectorAll('.badge-icon img')
            const icons = Array.from(iconElements).map(element => element.getAttribute('src'))

            // Select all elements with the class 'badge-meta' and 'badge-title'
            const titleElements = document.querySelectorAll('.badge-meta .badge-title')
            const titles = Array.from(titleElements).map(element => element.textContent)

            // Select all elements with the class 'badge-meta' and 'badge-date'
            const dateElements = document.querySelectorAll('.badge-meta .badge-date')
            const dates = Array.from(dateElements).map(element => element.textContent)

            // Using a loop to create an object
            const badges = icons.map((icon, index) => ({
                icon: icon,
                title: titles[index],
                date: dates[index],
            }))
            return badges
        })

        await browser.close()

        return NextResponse.json({
            data: results,
            message: 'Success!'
        }, { status: 200 })
    } catch (error) {
        console.error('Error in Puppeteer script:', error)
        return NextResponse.json({ message: 'Internal Server Error', error: error }, { status: 500 })
    }
}
