﻿using System;
using System.Collections.Generic;
using System.Linq;
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
    public class UsuariosController : ControllerBase
    {
        private IUsuarioRepository UsuarioRepository { get; set; }

        public UsuariosController()
        {
            UsuarioRepository = new UsuarioRepository();
        }

        [HttpGet]
        public IActionResult ListarUsuarios()
        {
            try
            {
                using (Sprint1_2019Context ctx = new Sprint1_2019Context())
                {
                    return Ok(ctx.Usuarios.ToList());
                }
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }

        [Authorize(Roles = "Adm")]
        [HttpPost]
        public IActionResult Cadastrar(Usuarios usuario)
        {
            try
            {
                using (Sprint1_2019Context ctx = new Sprint1_2019Context())
                {
                    ctx.Usuarios.Add(usuario);
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