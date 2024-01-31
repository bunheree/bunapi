import { getGoogleBadges } from '../../../middleware/google'
import { NextResponse } from 'next/server'

export async function GET(req) {
    const { searchParams } = new URL(req.url)
    const userid = searchParams.get('userid')
    try {
        if (!userid) {
            return NextResponse.json({ message: 'Invalid user profile id' }, { status: 500 })
        }
        const url = 'https://developers.google.com/profile/u/' + userid
        // Start the crawler
        const badges = await getGoogleBadges(url)

        return NextResponse.json({
            data: badges,
            message: 'Success!'
        }, { status: 200 })
    } catch (error) {
        console.error('Error in function:', error)
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 200 })
    }
}
