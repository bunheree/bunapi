// import { getApiDocs } from '@/lib/swagger'
// import ReactSwagger from '../../components/react-swagger'
import Battery from "@/components/Battery/Battery";

export default async function IndexPage() {
    // const spec = await getApiDocs()

    return (
        <div className="h-screen w-full text-center">
            Coming Soon!
            <Battery percent={0} />
        </div>
        // <section className="container">
        //     <ReactSwagger spec={spec} />
        // </section>
    )
}