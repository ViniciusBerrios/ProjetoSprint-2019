using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Sprint2Projeto.Domains;

namespace Sprint2Projeto.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class ClinicasController : ControllerBase
    {

        [Authorize(Roles = "Adm")]
        [HttpGet]
        public IActionResult ListarClinicas()
        {
            try
            {
                using (Sprint1_2019Context ctx = new Sprint1_2019Context())
                {
                    return Ok(ctx.Clinicas.ToList());
                }
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }

        [Authorize(Roles = "Adm")]
        [HttpPost]
        public IActionResult Cadastar (Clinicas clinica)
        {
            try
            {
                using (Sprint1_2019Context ctx = new Sprint1_2019Context())
                {
                    ctx.Clinicas.Add(clinica);
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
        public IActionResult Alterar(Clinicas clinica)
        {
            try
            {
                using (Sprint1_2019Context ctx = new Sprint1_2019Context())
                {
                    Clinicas clinicaExiste = ctx.Clinicas.Find(clinica.Id);

                    if(clinicaExiste == null)
                    {
                        return NotFound();
                    }

                    clinicaExiste.Nome = clinica.Nome;
                    ctx.Clinicas.Update(clinicaExiste);
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
        public IActionResult Deletar (int id)
        {
            try
            {
                using (Sprint1_2019Context ctx = new Sprint1_2019Context())
                {
                    Clinicas clinicaProcurado = ctx.Clinicas.Find(id);

                    if(clinicaProcurado == null)
                    {
                        return NotFound();
                    }

                    ctx.Clinicas.Remove(clinicaProcurado);
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