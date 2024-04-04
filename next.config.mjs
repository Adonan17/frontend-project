/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
                protocol:"https",
                hostname:"images.gr-assets.com/books",
                // pathname: "/C:\fakepath\aaaaa.jpg"
            },
            {
                protocol:"https",
                hostname:"example-data.draftbit.com"
            },
            // {
            //     protocol:"https",
            //     hostname:"C:\fakepath\aaaaa.jpg"

            // }
        ]
    }
};

export default nextConfig;