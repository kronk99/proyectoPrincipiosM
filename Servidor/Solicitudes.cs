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
        [Route("getMascotas")] //ruta getActivos, obtiene la lista
        //de todos los activos disponibles
        public ActionResult<IEnumerable<mascotasTemplate>> getMascota(string id)
        {//obtiene
        //del servidor
            string filePath = "mascotas.json";
            string jsonText = System.IO.File.ReadAllText(filePath);
            Dictionary<string, List<mascotasTemplate>> mascotasPorUsuario = JsonConvert.DeserializeObject<Dictionary<string, List<mascotasTemplate>>>(jsonText);

            if (mascotasPorUsuario.ContainsKey(id))
            {
                List<mascotasTemplate> mascotasDelUsuario = mascotasPorUsuario[id];
                return Ok(mascotasDelUsuario);
            }
            else
            {
                return NotFound(); // Devuelve 404 si el usuario no tiene citas
            }
        }
        [Route("getFacturas")] //ruta getActivos, obtiene la lista
        //de todos los activos disponibles
        public ActionResult<IEnumerable<facturasTemplate>> getFactura(string id)
        {//obtiene
        //del servidor
            string filePath = "facturas.json";
            string jsonText = System.IO.File.ReadAllText(filePath);
            Dictionary<string, List<facturasTemplate>> mascotasPorUsuario = JsonConvert.DeserializeObject<Dictionary<string, List<facturasTemplate>>>(jsonText);

            if (mascotasPorUsuario.ContainsKey(id))
            {
                List<facturasTemplate> mascotasDelUsuario = mascotasPorUsuario[id];
                return Ok(mascotasDelUsuario);
            }
            else
            {
                return NotFound(); // Devuelve 404 si el usuario no tiene citas
            }
        }
        [Route("getExpediente")] //ruta getActivos, obtiene la lista
        //de todos los activos disponibles
        public ActionResult<IEnumerable<expedienteTemplate>> getExpediente(string id)
        {//obtiene
        //del servidor
            string filePath = "expediente.json";
            string jsonText = System.IO.File.ReadAllText(filePath);
            Dictionary<string, List<expedienteTemplate>> expedientePorUsuario = JsonConvert.DeserializeObject<Dictionary<string, List<expedienteTemplate>>>(jsonText);

            if (expedientePorUsuario.ContainsKey(id))
            {
                List<expedienteTemplate> expedienteDelUsuario = expedientePorUsuario[id];
                return Ok(expedienteDelUsuario);
            }
            else
            {
                return NotFound(); // Devuelve 404 si el usuario no tiene citas
            }
        }
        [Route("getFarmacia")] //ruta getActivos, obtiene la lista
        //de todos los activos disponibles
        public ActionResult<IEnumerable<farmaciaTemplate>> getFarmacia(int tipoGet)
        {//obtiene
        //del servidor
            string filePath = "farmacia.json";
            string jsonText = System.IO.File.ReadAllText(filePath);
            List<farmaciaTemplate> farmaciaList = JsonConvert.DeserializeObject<List<farmaciaTemplate>>(jsonText);

            switch (tipoGet)
            {
                case 0:
                // No se realiza ningún ordenamiento, se devuelve la lista tal como está
                    break;
                case 1:
                // Ordena la lista por precio de forma descendente (más alto primero)
                    farmaciaList = farmaciaList.OrderByDescending(f => f.precio).ToList();
                    break;
                case 2:
            // Ordena la lista por nombre en orden alfabético
                    farmaciaList = farmaciaList.OrderBy(f => f.name).ToList();
                    break;
                default:
            // Si el tipoGet no es 0, 1 o 2, devuelve un BadRequest
                return BadRequest("Tipo de ordenamiento no válido.");
            }

            return Ok(farmaciaList);
        }
        [Route("getTienda")] //ruta getActivos, obtiene la lista
        //de todos los activos disponibles
        public ActionResult<IEnumerable<tiendaTemplate>> getFarmacia(int tipoGet)
        {//obtiene
        //del servidor
            string filePath = "tienda.json";
            string jsonText = System.IO.File.ReadAllText(filePath);
            List<tiendaTemplate> farmaciaList = JsonConvert.DeserializeObject<List<tiendaTemplate>>(jsonText);

            switch (tipoGet)
            {
                case 0:
                // No se realiza ningún ordenamiento, se devuelve la lista tal como está
                    break;
                case 1:
                // Ordena la lista por precio de forma descendente (más alto primero)
                    farmaciaList = farmaciaList.OrderByDescending(f => f.precio).ToList();
                    break;
                case 2:
            // Ordena la lista por nombre en orden alfabético
                    farmaciaList = farmaciaList.OrderBy(f => f.name).ToList();
                    break;
                default:
            // Si el tipoGet no es 0, 1 o 2, devuelve un BadRequest
                return BadRequest("Tipo de ordenamiento no válido.");
            }

            return Ok(farmaciaList);
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
        [Route("verificarLoginAdminVet")] //metodo que verifica el login de usuario
        public ActionResult<bool> ComprobarLoginVetAdmin(string email, string password){
            //platilloTemplate json = JsonConvert.DeserializeObject<platilloTemplate>(nombrePlatillos);
            //Console.Write(nuevoplatillo.Tipo);
            string filePath = "login.json";
            string jsonText = System.IO.File.ReadAllText(filePath);//lee todo el archivo
            List<userAdminVetTemplate> registros = JsonConvert.DeserializeObject<List<userAdminVetTemplate>>(jsonText);
            userAdminVetTemplate usuario = registros.FirstOrDefault(u => u.email == email); 
            bool valorReturn = verificarCredencialesAdminVet(usuario,password);
            Console.WriteLine("valor del login:",valorReturn);
            return Ok(valorReturn);
        }
        public bool verificarCredencialesAdminVet(userAdminVetTemplate usuario ,string password){
            if(usuario != null){//si el usuario existe
                if(usuario.password == password){//si la contraseña es igual retorna 1
                    Console.WriteLine(usuario.password);
                    Console.WriteLine(password);
                    Console.WriteLine("contraseña valida");
                    return true;
                }
                else{//si no es igual, retorna false
                    Console.WriteLine("contraseña erronea");
                    Console.WriteLine(usuario.password);
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