namespace A5A2PS.Web.Front.UI.Controllers
{
    using Microsoft.AspNet.Mvc;

    public class HomeController : Controller
    {
        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }
    }
}