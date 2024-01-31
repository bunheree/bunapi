import { getCredlyBadges } from '../../../middleware/credly'
import { NextResponse } from 'next/server'

export async function GET(req) {
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