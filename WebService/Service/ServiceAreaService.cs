using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace Sentri7.Services.Service
{
    public class ServiceAreaService : IServiceAreaService
    {
        private string _file;
        private List<Tuple<string, string>> _list;

        public ServiceAreaService(string file)
        {
            _file = file;
            _list =
                File.ReadLines(_file)
                    .Select(line => line.Split(','))
                    .Select(line => new Tuple<string, string>(line[0], line[1]))
                    .ToList();
        }

        public IEnumerable<Tuple<string, string>> Search(string beginsWith)
        {
            return
                _list.Where(f => f.Item2.ToLower().StartsWith(beginsWith.ToLower()))
                    .Select(s => new Tuple<string, string>(s.Item1, s.Item2)).OrderBy(t => t.Item2);
        }
    }
}