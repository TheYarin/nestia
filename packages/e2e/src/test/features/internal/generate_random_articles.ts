import { RandomGenerator } from "../../../RandomGenerator";
import { IBbsArticle } from "../structures/IBbsArticle";
import { IPage } from "../structures/IPage";

export function generate_random_articles(): IPage<IBbsArticle.ISummary> {
    const data: IBbsArticle.ISummary[] = new Array(100).fill("").map(() => {
        const created_at: string = RandomGenerator.date(
            new Date(),
            24 * 60 * 60 * 1000,
        ).toString();
        return {
            id: RandomGenerator.alphaNumeric(8),
            writer: RandomGenerator.name(),
            title: RandomGenerator.paragraph()(),
            created_at,
            updated_at: created_at,
        };
    });
    return {
        pagination: {
            page: 1,
            limit: 100,
            total_count: data.length,
            total_pages: 1,
        },
        data,
    };
}
