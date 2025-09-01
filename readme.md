### 1. Autenticacion del usuario 💡

- **Historia:** "Como usuario anónimo o invitado, quiero poder registrarme o iniciar sesion en mi aplicacion"
- **Criterios:**
  - Registro con email y contraseña
  - Validar login con email y contraseña
  - No se puede reservar sin iniciar sesion

### 2. Reserva de Turno

- **Historia:** "Como usuario autenticado, quiero poder reservar un turno indicando fecha y hora del turno"  
- **Criterios:**  
  - Solo seleccionar horarios de 8 a.m. – 6 p.m.  
  - No se puede reservar un turno en la fecha actual o previa al momento de la reserva.  
  - No se permiten reservar los fines de semana.  
  - No se puede duplicar un turno.

### Visualización de los turnos

- **Historia:** "Como usuario autenticado, quiero poder ver mis turnos reservados y cancelados"  
- **Criterios:**  
  - Ordenar turnos cronológicamente  
  - Filtrar por cancelados y reservados
  - Cada filtro muestra fecha, hora y una opcion para cancelar.

### Cancelacion de turno

- **Historia:** "Como usuario autenticado, quiero poder cancelar un turno reservado"  
- **Criterios:**  
  - Permitir hasta un dia antesa
  - se modifica el estado del turno.

### Envios de mails
- **Historia:** "Como usuario autenticado, quiero recibir un mail al momento de reservar o cancelar un turno"  
- **Criterios:**
  - Email con info  de la reserva
  - Email con la configuracion al cancelar el turno
  - Enviar al email asociado a la cuentañ.
 