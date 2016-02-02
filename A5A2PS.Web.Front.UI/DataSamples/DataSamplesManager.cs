namespace A5A2PS.Web.Front.UI.DataSamples
{
    using Models;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.IO;
    using Newtonsoft.Json;

    /// <summary>
    /// Static class to deal with json data
    /// </summary>
    internal static class DataSamplesManager
    {
        /// <summary>
        /// Cached posts
        /// </summary>
        private static BlogPostCollectionModel _blogPosts = null;

        /// <summary>
        /// Cached categories
        /// </summary>
        private static BlogPostCategoryCollectionModel _categories = null;

        private static string _repositoryPath = null;

        /// <summary>
        /// Initialize new instance and load data in cache
        /// </summary>
        /// <param name="path">Data json file repository's absolute path</param>
        public static void Initializes(string path)
        {
            if (string.IsNullOrWhiteSpace(path))
                throw new ArgumentNullException(nameof(path));

            _repositoryPath = path;

            LoadBlogPosts();
            LoadBlogCategories();
        }

        /// <summary>
        /// Read and return file's content
        /// </summary>
        /// <param name="path">absolute path of the file's repository</param>
        /// <param name="filename">name of the file</param>
        /// <returns></returns>
        private static string LoadFile(string filename)
        {
            if (string.IsNullOrWhiteSpace(filename))
                throw new ArgumentNullException(nameof(filename));

            if (!File.Exists(Path.Combine(_repositoryPath, $"{filename}.json")))
                throw new FileNotFoundException($"filename custom mapping file doesn't exists");

            string jsonString = string.Empty;
            using (StreamReader sr = new StreamReader(Path.Combine(_repositoryPath, $"{filename}.json")))
            {
                jsonString = sr.ReadToEnd();
            }
            return jsonString;
        }

        /// <summary>
        /// Put all posts in cache
        /// </summary>
        private static void LoadBlogPosts() => _blogPosts = new BlogPostCollectionModel(LoadFile("BlogPosts"));

        /// <summary>
        /// Put all categories in cache
        /// </summary>
        private static void LoadBlogCategories() => _categories = new BlogPostCategoryCollectionModel(LoadFile("BlogPostCategories"));

        #region Exposed methods

        public static BlogPostCollectionModel ListPosts() => _blogPosts;

        public static BlogPostModel GetPost(Guid id) => _blogPosts.Where(bp => bp.Id == id).Select(bp => bp).FirstOrDefault();

        public static BlogPostCategoryCollectionModel ListCategories() => _categories;

        public static async System.Threading.Tasks.Task<bool> CreatePost(string title, int categoryId, string content, string authorName = null, string authorMail = null)
        {
            try
            {
                _blogPosts.Add(new BlogPostModel(title, categoryId, content, author: authorName, authorMail: authorMail));
                File.WriteAllText(Path.Combine(_repositoryPath, "BlogPosts.json"), JsonConvert.SerializeObject(_blogPosts));
                return true;
            }
            catch (Exception ex)
            {

            }

            return false;
        }

        #endregion
    }
}