using Fitrite.Application.DTOs;
using Fitrite.Application.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Authorization;

namespace Fitrite.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LoginController : ControllerBase
    {
        private readonly IUserService _userService;
        public LoginController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(
        [FromBody] RegisterUser register,
        CancellationToken cancellationToken)
        {
            try
            {
                var user = await _userService.RegisterAsync(
                    register,
                    cancellationToken);

                return Ok(new
                {
                    Success = true,
                    Message = "Usuario registrado correctamente.",
                    UserId = user.UserId,
                    Email = user.Email
                });
            }
            catch (Exception ex)
            {
                return BadRequest(new
                {
                    Success = false,
                    Message = ex.Message
                });
            }
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginUser login, CancellationToken cancellationToken)
        {
            try
            {
                var user = await _userService.LoginUserAsync(login, cancellationToken);

                return Ok(new
                {
                    Success = true,
                    Message = "Login exitoso.",
                    UserId = user.UserId,
                    Email = user.Email,
                    RoleId = user.RoleId
                });
            }
            catch (Exception ex)
            {
                return BadRequest(new
                {
                    Success = false,
                    Message = ex.Message
                });
            }
        }
    }
}
