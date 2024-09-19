//===== Meta Data =====
export const metadata = {
    //===== Meta Tags =====
    title: "Privacy Policy | Bhaoo-Inc",
    description: "Privacy Policy",
    //===== OG Tags =====
    openGraph: {
        title: 'Privacy Policy | Bhaoo-Inc',
        description: 'Privacy Policy',
        url: '/privacy-policy/',
        siteName: 'Bhaoo-Inc',
        locale: 'en_US',
        type: 'website',
    },
    //===== Canonical =====
    alternates: { canonical: '/privacy-policy/' },
}

export default function RootLayout({ children }) {
    return (children);
}