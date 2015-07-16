using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Sentri7.Services.Service;

namespace Sentri7.Services.Controllers
{
    public class ServiceAreaController : Controller
    {
        private readonly IServiceAreaService _service;
        // GET: ServiceArea
        public ServiceAreaController(IServiceAreaService service)
        {
            _service = service;
        }

        public ActionResult Search(string beginsWith)
        {
            var options = _service.Search(beginsWith).Select(t => new { value = t.Item1, label = t.Item2 });
            return Json(
                new
                {
                    options
                },
                JsonRequestBehavior.AllowGet);
        }
    }
}