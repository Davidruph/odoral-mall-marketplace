import { Head } from "@inertiajs/react";

type SeoProps = {
    title?: string;
    description?: string;
    pageTitle: string;
};

export default function Seo({
    pageTitle = "",
    title = "Odora Mall Marketplace",
    description = "Your default description",
}: SeoProps) {
    return (
        <Head>
            <title>{pageTitle ? `${pageTitle} - ${title}` : title}</title>
            {description && <meta name="description" content={description} />}
        </Head>
    );
}
