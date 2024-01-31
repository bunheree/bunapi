import { getApiDocs } from '../../lib/swagger'
import ReactSwagger from '../../components/react-swagger'

export default async function APIDocs() {
    const spec = await getApiDocs()

    return (
        <section className="container">
            <ReactSwagger spec={spec} />
        </section>
    )
}