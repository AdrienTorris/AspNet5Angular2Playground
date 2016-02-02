namespace A5A2PS.Web.Front.UI.DataSamples
{
    using A5A2PS.Web.Front.UI.Models;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.IO;
    using Newtonsoft.Json;

    internal static class DataSamplesManager
    {
        private static BlogPostCollectionModel _blogPosts = null;
        private static BlogPostCategoryCollectionModel _categories = null;

        public static void Initializes(string path)
        {
            LoadBlogPosts(path);
            LoadBlogCategories(path);
        }

        private static string LoadFile(string path, string filename)
        {
            if (string.IsNullOrWhiteSpace(filename))
                throw new ArgumentNullException(nameof(filename));

            if (!File.Exists(Path.Combine(path, $"{filename}.json")))
                throw new FileNotFoundException($"filename custom mapping file doesn't exists");

            string jsonString = string.Empty;
            using (StreamReader sr = new StreamReader(Path.Combine(path, $"{filename}.json")))
            {
                jsonString = sr.ReadToEnd();
            }
            return jsonString;
        }

        private static void LoadBlogPosts(string path) => _blogPosts = new BlogPostCollectionModel(LoadFile(path, "BlogPosts"));

        private static void LoadBlogCategories(string path) => _categories = new BlogPostCategoryCollectionModel(LoadFile(path, "BlogPostCategories"));

        #region Exposed methods

        public static BlogPostCollectionModel ListPosts() => _blogPosts;

        public static BlogPostModel GetPost(Guid id) => _blogPosts.Where(bp => bp.Id == id).Select(bp => bp).FirstOrDefault();

        public static BlogPostCategoryCollectionModel ListCategories() => _categories;

        #endregion
    }
}