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

    }

}