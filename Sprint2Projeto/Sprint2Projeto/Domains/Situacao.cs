using System;
using System.Collections.Generic;

namespace Sprint2Projeto.Domains
{
    public partial class Situacao
    {
        public Situacao()
        {
            Consultas = new HashSet<Consultas>();
        }

        public int Id { get; set; }
        public string Statu { get; set; }

        public ICollection<Consultas> Consultas { get; set; }
    }
}
