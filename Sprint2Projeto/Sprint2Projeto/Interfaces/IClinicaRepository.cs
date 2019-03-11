using Sprint2Projeto.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Sprint2Projeto.Interfaces
{
    interface IClinicaRepository
    {

        void Deletar(int id);

        void Alterar(Clinicas clinica);

        List<Clinicas> Listar();
    }
}
