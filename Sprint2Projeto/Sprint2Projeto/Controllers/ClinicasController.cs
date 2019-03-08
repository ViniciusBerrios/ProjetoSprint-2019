using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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
    }
}