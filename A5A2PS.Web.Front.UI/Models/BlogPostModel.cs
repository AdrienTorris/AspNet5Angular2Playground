namespace A5A2PS.Web.Front.UI.Models
{
    using Newtonsoft.Json;
    using Newtonsoft.Json.Linq;
    using System;
    using System.Collections.Generic;
    using System.Linq;

    public class BlogPostModel
    {
        [JsonProperty(PropertyName = "id")]
        public Guid Id { get; set; }

        [JsonProperty(PropertyName = "title")]
        public string Title { get; set; }

        [JsonProperty(PropertyName = "content")]
        public string Content { get; set; }

        [JsonProperty(PropertyName = "author")]
        public string Author { get; set; }

        [JsonProperty(PropertyName = "authormail")]
        public string AuthorMail { get; set; }

        [JsonProperty(PropertyName = "tags")]
        public string Tags { get; set; }

        [JsonProperty(PropertyName = "category")]
        public int Category { get; set; }

        public List<string> TagList
        {
            get
            {
                if (string.IsNullOrWhiteSpace(Tags))
                    return new List<string>();

                return Tags.Split(new char[] { ',', '|', ';' }, StringSplitOptions.RemoveEmptyEntries).ToList();
            }
        }
    }

    public class BlogPostCollectionModel : List<BlogPostModel>
    {
        /// <summary>
        /// Empty ctor
        /// </summary>
        public BlogPostCollectionModel()
        { }

        /// <summary>
        /// Populate from json string
        /// </summary>
        /// <param name="json"></param>
        public BlogPostCollectionModel(string json)
        {
            if (string.IsNullOrWhiteSpace(json))
                return;

            AddRange(JsonConvert.DeserializeObject<List<BlogPostModel>>(json));
        }
    }
}