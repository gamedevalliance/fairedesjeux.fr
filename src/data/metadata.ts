interface Metadata {
    websiteURL: string
}

const metadata: Metadata = {
    websiteURL: process.env.NODE_ENV == 'production' ? 'https://v1.fairedesjeux.fr' : 'http://localhost:3000'
}

export { metadata }
