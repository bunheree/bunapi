import { createSwaggerSpec } from 'next-swagger-doc'
import ReactSwagger from '../../components/react-swagger'

export default async function APIDocs() {
    const spec = createSwaggerSpec({
        apiFolder: 'src/app/api', // define api folder under app folder
        definition: {
            openapi: '3.0.0',
            info: {
                title: 'Swagger API Example for api.bunhere.com',
                version: '1.0',
            },
            components: {
                securitySchemes: {
                    BearerAuth: {
                        type: 'http',
                        scheme: 'bearer',
                        bearerFormat: 'JWT',
                    },
                },
            },
            security: [],
        },
    })

    return (
        <section className="container">
            <ReactSwagger spec={spec} />
        </section>
    )
}