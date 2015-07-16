using System.Linq;
using System.Web.Mvc;
using Sentri7.Services.Service;

namespace Sentri7.Services.Controllers
{
    public class DiagnosisController : Controller
    {
        private readonly IDiagnosisService _diagnosis;

        public DiagnosisController(IDiagnosisService diagnosis)
        {
            _diagnosis = diagnosis;
        }


        public ActionResult Search(string beginsWith)
        {
            var options = _diagnosis.Search(beginsWith).Select(t => new {value = t.Item1, label = t.Item2});
            return Json(
                new
                {
                    options
                },
                JsonRequestBehavior.AllowGet);
        }
    }
}