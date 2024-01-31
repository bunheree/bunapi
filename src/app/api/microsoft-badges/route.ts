import { getMicrosoftBadges } from '../../../middleware/microsoft'
import { NextResponse } from 'next/server'

/**
 * @swagger
 * /api/microsoft-badges:
 *   get:
 *     summary: Get a list of Microsoft Learning path badges, Trophies
 *     description: Returns the list Microsoft Learning path badges, Trophies
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
 *         description: A JSON array of Microsoft Learning path badges, Trophies
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
        const url = ' https://learn.microsoft.com/en-us/users/' + userid
        // Start the crawler
        const badges = await getMicrosoftBadges(url)

        return NextResponse.json({
            data: badges,
            message: 'Success!'
        }, { status: 200 })
    } catch (error) {
        console.error('Error in function:', error)
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 200 })
    }
}
