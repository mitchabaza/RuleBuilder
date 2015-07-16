using System;
using System.Collections.Generic;

namespace Sentri7.Services.Service
{
    public interface IServiceAreaService
    {
        IEnumerable<Tuple<string, string>> Search(string beginsWith);
    }
}