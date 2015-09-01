using System.Web;
using System.Web.Mvc;

namespace WebApplication
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
            filters.Add(new FuckWithResponseFilter());
        }
    }

    public class FuckWithResponseFilter:ActionFilterAttribute

    {
        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            HttpResponseBase response = filterContext.HttpContext.Response;
        
            base.OnActionExecuting(filterContext);

        }
    }
}