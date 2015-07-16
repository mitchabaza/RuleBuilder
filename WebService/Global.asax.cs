using System.Web.Hosting;
using System.Web.Mvc;
using System.Web.Routing;
using Autofac;
using Autofac.Integration.Mvc;
using Sentri7.Services.Service;

namespace Sentri7.Services
{
    // Note: For instructions on enabling IIS6 or IIS7 classic mode, 
    // visit http://go.microsoft.com/?LinkId=9394801

    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
          
            AutofacInit();
        }

        private void AutofacInit()
        {
            var container = new ContainerBuilder();
            container.Register(
                s => new DiagnosisService(HostingEnvironment.MapPath(@"~\DiagnosisCode.txt")))
                .AsSelf()
                .AsImplementedInterfaces()
                .SingleInstance();
            container.Register(
                s => new ServiceAreaService(HostingEnvironment.MapPath(@"~\ServiceArea.txt")))
                .AsSelf()
                .AsImplementedInterfaces()
                .SingleInstance();
            container.RegisterControllers(typeof(DiagnosisService).Assembly).AsSelf().InstancePerDependency();
            DependencyResolver.SetResolver(new AutofacDependencyResolver(container.Build()));
         
             
        }
    }
}