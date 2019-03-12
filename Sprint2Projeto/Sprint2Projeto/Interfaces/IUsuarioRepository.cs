using Sprint2Projeto.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Sprint2Projeto.Interfaces
{
    interface IUsuarioRepository
    {
        void Cadastrar(Usuarios usuario);

        List<Usuarios> Listar();

        Usuarios BuscarPorEmailESenha(string email, string senha);

        void Deletar(int id);

        void Alterar(Usuarios usuario);
    }
}
