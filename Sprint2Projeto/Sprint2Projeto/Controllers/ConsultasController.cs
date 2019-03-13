using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Sprint2Projeto.Domains;
using Sprint2Projeto.Interfaces;
using Sprint2Projeto.Repositories;

namespace Sprint2Projeto.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class ConsultasController : ControllerBase
    {
        private IConsultaRepository ConsultaRepository { get; set; }

        public ConsultasController()
        {
            ConsultaRepository = new ConsultaRepository();
        }

        [Authorize]
        [HttpGet]
        public IActionResult ListarConsultas()
        {
            try
            {
                int id = Convert.ToInt32(HttpContext.User.Claims.First(c => c.Type == JwtRegisteredClaimNames.Jti).Value);
                string idTipoUsuario = Convert.ToString(HttpContext.User.Claims.First(c => c.Type == ClaimTypes.Role).Value);
                return Ok(ConsultaRepository.ListarConsultas(id, idTipoUsuario));
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }

        [Authorize(Roles = "Adm")]
        [HttpPost]
        public IActionResult Cadastrar(Consultas consulta)
        {
            try
            {
                using (Sprint1_2019Context ctx = new Sprint1_2019Context())
                {
                    ctx.Consultas.Add(consulta);
                    ctx.SaveChanges();
                }
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }

        [Authorize(Roles = "Adm")]
        [HttpDelete("{id}")]
        public IActionResult Deletar(int id)
        {
            try
            {
                using (Sprint1_2019Context ctx = new Sprint1_2019Context())
                {
                    Consultas consultaProcurado = ctx.Consultas.Find(id);

                    if(consultaProcurado == null)
                    {
                        return NotFound();
                    }

                    ctx.Consultas.Remove(consultaProcurado);
                    ctx.SaveChanges();
                }
                    return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }

        [Authorize(Roles = "Adm")]
        [HttpPut]
        public IActionResult Alterar(Consultas consulta)
        {
            try
            {
                using (Sprint1_2019Context ctx = new Sprint1_2019Context())
                {
                    Consultas consultaExiste = ctx.Consultas.Find(consulta.Id);

                    if(consultaExiste == null)
                    {
                        return NotFound();
                    }

                    consultaExiste.Descricao = consulta.Descricao;
                    ctx.Consultas.Update(consultaExiste);
                    ctx.SaveChanges();
                }
                    return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }
    }
}