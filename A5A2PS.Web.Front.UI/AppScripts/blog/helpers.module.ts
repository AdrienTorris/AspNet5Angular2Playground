import { BlogPost } from './model';
import { UrlBuilderConstants } from '../shared/constants/UrlBuilderConstants';

/**
 * Module contains several helper methods about blog data
 */
export module HelperModule {

    /**
     * Static class to build urls
     */
    export class UrlBuilder {

        static BuildPostListUrl(): string {
            return UrlBuilderConstants.API_BASE_URL + 'Blog/ListPosts';
        }

        static BuildPostUrl(id: string): string {
            return UrlBuilderConstants.API_BASE_URL + 'Blog/Get?id='+id;
        }

        static BuildCreateUrl(): string {
            return UrlBuilderConstants.API_BASE_URL + 'Blog/Create';
        }

        static BuildCreatePostBody(bp: BlogPost): string {
            var body: string = 'title=' + bp.title + '&content=' + bp.content + '&catgid=' + bp.category;
            if (bp.author != null && bp.author != 'undefined') {
                body += '&author=' + bp.author;
            }
            if (bp.authorMail != null && bp.authorMail != 'undefined') {
                body += '&authorm=' + bp.authorMail;
            }
            return body;
        }

        static BuildCategoryListUrl(): string {
            return UrlBuilderConstants.API_BASE_URL + 'Blog/ListCategories';
        }

        static BuildCheckPostTitleUnicityUrl(title:string): string {
            return UrlBuilderConstants.API_BASE_URL + 'Blog/CheckPostTitleUnicity?ttl=' + title;
        }

    }

}