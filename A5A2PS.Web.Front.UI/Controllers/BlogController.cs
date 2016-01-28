namespace A5A2PS.Web.Front.UI.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNet.Mvc;
    using DataSamples;

    public class BlogController : Controller
    {
        [HttpGet]
        public JsonResult ListPosts() => Json(DataSamplesManager.ListPosts());
    }
}