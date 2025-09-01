import { motion } from "framer-motion"
import styles from "./HomePage.module.css"

const HomePage = ({ user, onNavigate }) => {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  }

  return (
    <motion.div className={styles["home-page"]} variants={containerVariants} initial="initial" animate="animate">
      <motion.section className={styles["hero-section"]} variants={itemVariants}>
        <div className={styles["hero-content"]}>
          <motion.div
            className={styles["user-welcome"]}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
          >
            <span className={styles["user-avatar"]}>{user?.avatar || "🦍"}</span>
            <h1>¡Bienvenido, {user?.name || "Usuario"}!</h1>
          </motion.div>
        </div>

       <motion.section className={styles["description-section"]} variants={itemVariants}>
        <div className={styles["description-content"]}>
          <h2>¿Por qué elegir Animal?</h2>
          <p>
           El mejor lugar para practicar tus deportes favoritos es Animal.Aquí encontrarás canchas de primera calidad para voley, fútbol 5, tenis y básquet, diseñadas para ofrecerte la mejor experiencia deportiva. Nuestro espacio está pensado para que tanto principiantes como profesionales puedan entrenar, competir y divertirse en un ambiente seguro y cómodo. Además, contamos con instalaciones modernas, iluminación óptima para juegos nocturnos, y un equipo de atención siempre dispuesto a ayudarte. En Animal, tu pasión por el deporte se vive al máximo, ¡ven y formá parte de nuestra comunidad activa y saludable!
          </p>
        </div>
      </motion.section>
      <motion.section className={styles["quick-actions"]} variants={itemVariants}>
         <h2> Acciones Rapidas</h2>
        <div className={styles["actions-container"]}>
          <motion.button
            className={styles["quick-action"]}
            onClick={() => onNavigate("contacto")}
            whileHover={{ scale: 1.05, backgroundColor: "#00ff00", color: "#000" }}
            whileTap={{ scale: 0.95 }}
          >
            📞 Contactar
          </motion.button>
           <motion.button
            className={styles["quick-action"]}
            onClick={() => onNavigate("turnos")}
            whileHover={{ scale: 1.05, backgroundColor: "#00ff88", color: "#000" }}
            whileTap={{ scale: 0.95 }}
          >
            📅 Reservar Ahora
          </motion.button>
        </div>
      </motion.section>
       <motion.section className={styles["courts-section"]} variants={itemVariants}>
        <h2>Nuestras Canchas</h2>
        <div className={styles["courts-container"]}>
          {[
            {
              nombre: "Cancha de Vóley",
              imagen: "/public/img/voley.jpg",
              descripcion: "Espacio ideal para partidos de vóley recreativo o competitivo, con piso acolchado y red profesional.",
            },
            {
              nombre: "Fútbol 5",
              imagen: "/public/img/futbol5.jpg",
              descripcion: "Cancha sintética de alta calidad, perfecta para partidos intensos con amigos o torneos locales.",
            },
            {
              nombre: "Cancha de Tenis",
              imagen: "/public/img/tenis.jpg",
              descripcion: "Superficie rápida y bien iluminada para partidos de tenis, ideal tanto para entrenar como competir.",
            },
            {
              nombre: "Cancha de Básquet",
              imagen: "/public/img/basquet.jpg",
              descripcion: "Tableros profesionales y superficie antideslizante, diseñada para disfrutar al máximo del básquet.",
            },
          ].map((cancha, index) => (
            <motion.div
              key={index}
              className={styles["court-card"]}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img src={cancha.imagen} alt={cancha.nombre} className={styles["court-image"]} />
              <h3>{cancha.nombre}</h3>
              <p>{cancha.descripcion}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
        <div className={styles["floating-elements"]}>
          {[...Array(8)].map((_, i) => (
             <motion.div
            key={i}
            className={styles["floating-element"]}
            animate={{
              y: [0, 20, 0],
              x: [0, -20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4 + i ,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
          ))}
        </div>
      </motion.section>

    </motion.div>
  )
}

export default HomePage