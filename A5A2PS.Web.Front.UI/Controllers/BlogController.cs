namespace A5A2PS.Web.Front.UI.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using Microsoft.AspNet.Mvc;
    using DataSamples;

    [Route("api/[controller]")]
    public class BlogController : Controller
    {
        [Route("[action]")]
        [HttpGet]
        public JsonResult ListPosts() => Json(DataSamplesManager.ListPosts());

        [Route("[action]")]
        [HttpGet]
        public JsonResult Get(Guid id) => Json(DataSamplesManager.GetPost(id));
    }
}