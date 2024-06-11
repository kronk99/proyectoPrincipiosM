using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.IO;
namespace Tiposdeplatos
{
    
    [ApiController] //define a la clase de abajo como controlador
    //de api aspnetcore
    [Route("api")]//define las rutas hacia donde hacer las solicitudes
    //get, set etc, comienzan con esto
    
    public class solicitudes:ControllerBase{
        [HttpGet]//definición de los metodos httpget 
        [Route("getCitas")] //ruta getActivos, obtiene la lista
        //de todos los activos disponibles
        public ActionResult<IEnumerable<citasTemplate>> Get(string id)
        {//obtiene
        //del servidor
            string filePath = "citas.json";
            string jsonText = System.IO.File.ReadAllText(filePath);
            Dictionary<string, List<citasTemplate>> citasPorUsuario = JsonConvert.DeserializeObject<Dictionary<string, List<citasTemplate>>>(jsonText);

            if (citasPorUsuario.ContainsKey(id))
            {
                List<citasTemplate> citasDelUsuario = citasPorUsuario[id];
                return Ok(citasDelUsuario);
            }
            else
            {
                return NotFound(); // Devuelve 404 si el usuario no tiene citas
            }
        }
        [Route("verificarLogin")] //metodo que verifica el login de usuario
        public ActionResult<bool> ComprobarLogin(string correo, string contrasena){
            //platilloTemplate json = JsonConvert.DeserializeObject<platilloTemplate>(nombrePlatillos);
            //Console.Write(nuevoplatillo.Tipo);
            string filePath = "login.json";
            string jsonText = System.IO.File.ReadAllText(filePath);//lee todo el archivo
            List<loginTemplate> registros = JsonConvert.DeserializeObject<List<loginTemplate>>(jsonText);
            loginTemplate usuario = registros.FirstOrDefault(u => u.correo ==correo); 
            bool valorReturn = verificarCredenciales(usuario,contrasena);
            Console.WriteLine("valor del login:",valorReturn);
            return Ok(valorReturn);
        }
        public bool verificarCredenciales(loginTemplate usuario ,string password){
            if(usuario != null){//si el usuario existe
                if(usuario.contrasena == password){//si la contraseña es igual retorna 1
                    Console.WriteLine(usuario.contrasena);
                    Console.WriteLine(password);
                    Console.WriteLine("contraseña valida");
                    return true;
                }
                else{//si no es igual, retorna false
                    Console.WriteLine("contraseña erronea");
                    Console.WriteLine(usuario.contrasena);
                    Console.WriteLine(password);
                    return false;// si no , retorna 0
                    
                }
            }
            else{//si no lo encuentra, el usuario no existe
                Console.WriteLine("usuario no existe");
                return false;
            }
        }
        [HttpPost]
        [Route("deleteCitas")]
        public ActionResult<bool> borrarCita([FromBody] citasTemplate citaABorrar){
            string filePath = "citas.json";
            string jsonText = System.IO.File.ReadAllText(filePath);
            Dictionary<string, List<citasTemplate>> citasPorUsuario = JsonConvert.DeserializeObject<Dictionary<string, List<citasTemplate>>>(jsonText);

            if (citasPorUsuario.ContainsKey(citaABorrar.usuario)){
                List<citasTemplate> citasDelUsuario = citasPorUsuario[citaABorrar.usuario];
                citasTemplate citaEncontrada = citasDelUsuario.FirstOrDefault(c => c.fecha == citaABorrar.fecha &&
                c.mascota == citaABorrar.mascota && c.doctor == citaABorrar.doctor &&
                c.estado == citaABorrar.estado);
                if (citaEncontrada != null){
                    citasDelUsuario.Remove(citaEncontrada);
                    // Guarda los cambios en el archivo JSON
                    string updatedJsonText = JsonConvert.SerializeObject(citasPorUsuario, Formatting.Indented);
                    System.IO.File.WriteAllText(filePath, updatedJsonText);
                    return Ok(true); // Devuelve true si la cita se borró exitosamente
                }
                else
                {
                    return NotFound(); // Devuelve 404 si la cita no fue encontrada
                }
            }
            else
            {
                return NotFound(); 
            }
       }
    }
}