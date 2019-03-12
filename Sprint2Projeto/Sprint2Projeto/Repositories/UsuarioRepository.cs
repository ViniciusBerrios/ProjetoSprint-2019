using Microsoft.EntityFrameworkCore;
using Sprint2Projeto.Domains;
using Sprint2Projeto.Interfaces;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace Sprint2Projeto.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {
        public void Alterar(Usuarios usuario)
        {
            throw new NotImplementedException();
        }

        public Usuarios BuscarPorEmailESenha(string email, string senha)
        {
            using (Sprint1_2019Context ctx = new Sprint1_2019Context())
            {
                Usuarios usuarioBuscado = ctx.Usuarios.Include(x => x.IdTipoUsuarioNavigation).FirstOrDefault(x => x.Email == email && x.Senha == senha);
                if (usuarioBuscado == null)
                {
                    return null;
                }
                return usuarioBuscado;
            }
        }

        public void Cadastrar(Usuarios usuario)
        {
            throw new NotImplementedException();
        }

        public void Deletar(int id)
        {
            throw new NotImplementedException();
        }

        public List<Usuarios> Listar()
        {
            throw new NotImplementedException();
        }
    }
}
