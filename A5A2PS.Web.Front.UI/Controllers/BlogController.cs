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
        [Route("[action]")]
        [HttpGet]
        public JsonResult ListPosts() => Json(DataSamplesManager.ListPosts());

        [Route("[action]")]
        [HttpGet]
        public JsonResult Get(Guid id) => Json(DataSamplesManager.GetPost(id));

        [Route("[action]")]
        [HttpPost]
        public async Task<bool> Create([FromForm]string title, [FromForm]string content, [FromForm]int catgid, [FromForm]string author, [FromForm]string authorm)
        {
            throw new NotImplementedException();
        }

        [Route("[action]")]
        [HttpGet]
        public JsonResult ListCategories() => Json(DataSamplesManager.ListCategories());
    }
}