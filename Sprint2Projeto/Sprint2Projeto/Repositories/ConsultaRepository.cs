using Sprint2Projeto.Domains;
using Sprint2Projeto.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Sprint2Projeto.Repositories
{
    public class ConsultaRepository : IConsultaRepository
    {

        public void Alterar(Consultas consulta)
        {
            throw new NotImplementedException();
        }

        public void Cadastrar(Consultas consulta)
        {
            throw new NotImplementedException();
        }

        public void Deletar(int id)
        {
            throw new NotImplementedException();
        }

        public List<Consultas> ListarConsultas(int id, string idTipoUsuario)
        {
            using (Sprint1_2019Context ctx = new Sprint1_2019Context())
            {
                if (idTipoUsuario == "Adm")
                {
                    ctx.Consultas.ToList();
                }

                if (idTipoUsuario == "Medico")
                {
                    Medicos medico;
                    medico = ctx.Medicos.FirstOrDefault(x => x.IdUsuario == id);

                    return ctx.Consultas.Where(x => x.IdMedico == medico.Id).ToList();
                }

                if (idTipoUsuario == "Paciente")
                {
                    Prontuario prontuario;
                    prontuario = ctx.Prontuario.FirstOrDefault(x => x.IdUsuario == id);

                    return ctx.Consultas.Where(x => x.IdProntuario == prontuario.Id).ToList();
                }

                return null;
            }
        }
    }
}
