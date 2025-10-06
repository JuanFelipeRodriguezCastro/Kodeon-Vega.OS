export class Sesion {
  constructor() {
    this.usuarioActivo = null;
    this.usuarios = [
      { idUsuario: "admin", contraseña: "123", rol: "Administrador", nombre: "Fer" },
      { idUsuario: "user", contraseña: "456", rol: "Recepcionista", nombre: "Juan" }
    ];
  }

  login(idUsuario, contraseña) {
    const user = this.usuarios.find(
      u => u.idUsuario === idUsuario && u.contraseña === contraseña
    );
    if (user) {
      this.usuarioActivo = user;
      return user;
    }
    return null;
  }

  logout() {
    this.usuarioActivo = null;
  }
}

