import NewsList from "@/components/news-list"
import { DUMMY_NEWS } from "@/dummy-news"

export async function generateMetadata() {
    return {
        title: "News Page",
        description: "This is the news page"
    }
}

const NewsPage = () => {
    return (
        <>
            <header>
                <h1>News Page</h1>
            </header>
            <main>
                <NewsList news={DUMMY_NEWS} />
            </main>
        </>
    )
}
export default NewsPage