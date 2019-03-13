using Sprint2Projeto.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Sprint2Projeto.Interfaces
{
    interface IConsultaRepository
    {
        void Cadastrar(Consultas consulta);

        List<Consultas> ListarConsultas(int id, string idTipoUsuario);

        void Deletar(int id);

        void Alterar(Consultas consulta);
    }
}
