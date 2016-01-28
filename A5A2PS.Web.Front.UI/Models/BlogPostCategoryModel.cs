namespace A5A2PS.Web.Front.UI.Models
{
    using Newtonsoft.Json;
    using System;
    using System.Collections.Generic;
    using System.Linq;

    public class BlogPostCategoryModel
    {
        [JsonProperty(PropertyName = "id")]
        public int Id { get; set; }
        [JsonProperty(PropertyName = "name")]
        public string Name { get; set; }
        [JsonProperty(PropertyName = "description")]
        public string Description { get; set; }
        [JsonProperty(PropertyName = "parentid")]
        public int? ParentId { get; set; }
    }

    public class BlogPostCategoryCollectionModel : List<BlogPostCategoryModel>
    {
        /// <summary>
        /// Empty ctor
        /// </summary>
        public BlogPostCategoryCollectionModel()
        { }

        /// <summary>
        /// Populate from json string
        /// </summary>
        /// <param name="json"></param>
        public BlogPostCategoryCollectionModel(string json)
        {
            if (string.IsNullOrWhiteSpace(json))
                return;

            AddRange(JsonConvert.DeserializeObject<List<BlogPostCategoryModel>>(json));
        }
    }
}