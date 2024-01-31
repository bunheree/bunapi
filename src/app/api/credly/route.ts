import { getCredlyBadges } from '../../../middleware/credly'
import { NextResponse } from 'next/server'

/**
 * @swagger
 * /api/credly:
 *   get:
 *     summary: Get a list of Credly badges
 *     description: Returns the list Credly badges
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
 *         description: A JSON array of Credly badges
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
 *                       from:
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
        const url = 'https://www.credly.com/users/' + userid + '/badges'
        // Start the crawler
        const badges = await getCredlyBadges(url)

        return NextResponse.json({
            data: badges,
            message: 'Success!'
        }, { status: 200 })
    } catch (error) {
        console.error('Error in function:', error)
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 200 })
    }
}