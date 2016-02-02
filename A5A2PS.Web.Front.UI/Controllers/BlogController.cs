namespace A5A2PS.Web.Front.UI.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using Microsoft.AspNet.Mvc;
    using DataSamples;
    using System.Threading.Tasks;

    [Route("api/[controller]")]
    public class BlogController : Controller
    {
        /// <summary>
        /// List all posts
        /// </summary>
        /// <returns></returns>
        [Route("[action]")]
        [HttpGet]
        public JsonResult ListPosts() => Json(DataSamplesManager.ListPosts());

        /// <summary>
        /// Get a blog post by his id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [Route("[action]")]
        [HttpGet]
        public JsonResult Get(Guid id) => Json(DataSamplesManager.GetPost(id));

        /// <summary>
        /// Create new post in DB
        /// </summary>
        /// <param name="title"></param>
        /// <param name="content"></param>
        /// <param name="catgid"></param>
        /// <param name="author"></param>
        /// <param name="authorm"></param>
        /// <returns></returns>
        [Route("[action]")]
        [HttpPost]
        public async Task<bool> Create([FromForm]string title, [FromForm]string content, [FromForm]int catgid, [FromForm]string author, [FromForm]string authorm)
        {
            if (string.IsNullOrWhiteSpace(title))
                throw new ArgumentNullException(nameof(title));

            if (string.IsNullOrWhiteSpace(content))
                throw new ArgumentNullException(nameof(content));

            if (catgid <= 0)
                throw new ArgumentNullException(nameof(catgid));

            return await DataSamplesManager.CreatePost(title, catgid, content, authorName: author, authorMail: authorm);
        }

        /// <summary>
        /// List all available categories
        /// </summary>
        /// <returns></returns>
        [Route("[action]")]
        [HttpGet]
        public JsonResult ListCategories() => Json(DataSamplesManager.ListCategories());
    }
}