import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import LoginForm from "../../components/LoginForm/LoginForm"
import RegisterForm from "../../components/RegisterForm/RegisterForm"
import "./AuthPage.css"

const AuthPage = ({ onLogin }) => {
  const [activeTab, setActiveTab] = useState("login")

  const pageVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.2 },
  }

  const leftVariants = {
    initial: { x: -100, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  }

  const rightVariants = {
    initial: { x: 100, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  }

  const itemVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  }

  return (
    <motion.div
      className="auth-page-style"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.6 }}
    >
      
      <div className="auth-background">
        <div className="floating-shapes">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="shape"
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 4 + i,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      </div>

      <div className="auth-container">
        <motion.div className="auth-info-section" variants={leftVariants}>
          <motion.div className="brand-section" variants={itemVariants}>
            <motion.h1
              className="brand-title"
              animate={{
                textShadow: [
                  "0 0 20px rgba(0, 255, 0, 0.5)",
                  "0 0 40px rgba(0, 255, 0, 0.8)",
                  "0 0 20px rgba(0, 255, 0, 0.5)",
                ],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              🦁 ANIMAL
            </motion.h1>
            <motion.p className="brand-tagline" variants={itemVariants}>
              Las mejores canchas de Mendoza
            </motion.p>
          </motion.div>

          <motion.div className="description-section" variants={itemVariants}>
            <h2>Donde los Campeones Juegan</h2>
            <p>
              Únete a la comunidad deportiva más exclusiva. Accede a canchas premium, entrena con equipamiento
              profesional y forma parte de la elite atlética.
            </p>
          </motion.div>

          <motion.div className="benefits-section" variants={itemVariants}>
            <div className="benefit-item">
              <span className="benefit-icon">🏟️</span>
              <div className="benefit-text">
                <h3>4 Deportes Premium</h3>
                <p>Fútbol 5, Básquet, Tenis y Vóley con instalaciones de primer nivel</p>
              </div>
            </div>

            <div className="benefit-item">
              <span className="benefit-icon">⏰</span>
              <div className="benefit-text">
                <h3>Disponibilidad de 17hs a 23hs</h3>
                <p>Reserva tu cancha cuando quieras, iluminación LED profesional</p>
              </div>
            </div>

            <div className="benefit-item">
              <span className="benefit-icon">🏆</span>
              <div className="benefit-text">
                <h3>Comunidad Elite</h3>
                <p>Conecta con atletas profesionales y mejora tu rendimiento</p>
              </div>
            </div>

            <div className="benefit-item">
              <span className="benefit-icon">💪</span>
              <div className="benefit-text">
                <h3>Equipamiento Pro</h3>
                <p>Vestuarios premium, duchas, casilleros y área de descanso</p>
              </div>
            </div>
          </motion.div>

          <motion.div className="stats-mini" variants={itemVariants}>
            <div className="stat-mini">
              <span className="stat-number-mini">12</span>
              <span className="stat-label-mini">Canchas</span>
            </div>
            <div className="stat-mini">
              <span className="stat-number-mini">500+</span>
              <span className="stat-label-mini">Atletas</span>
            </div>
            <div className="stat-mini">
              <span className="stat-number-mini">98%</span>
              <span className="stat-label-mini">Satisfacción</span>
            </div>
          </motion.div>
        </motion.div>

        
        <motion.div className="auth-form-section" variants={rightVariants}>
          <div className="form-container">
            <motion.div className="form-header" variants={itemVariants}>
              <h2>Accede a tu cuenta</h2>
              <p>Inicia sesión o regístrate para reservar canchas</p>
            </motion.div>

            <motion.div className="form-tabs" variants={itemVariants}>
              <motion.button
                className={`tab ${activeTab === "login" ? "active" : ""}`}
                onClick={() => setActiveTab("login")}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Iniciar Sesión
              </motion.button>
              <motion.button
                className={`tab ${activeTab === "register" ? "active" : ""}`}
                onClick={() => setActiveTab("register")}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Registrarse
              </motion.button>
            </motion.div>

            <motion.div className="form-content" variants={itemVariants}>
              <AnimatePresence mode="wait">
                {activeTab === "login" ? (
                  <LoginForm key="login" onLogin={onLogin} />
                ) : (
                  <RegisterForm key="register" onLogin={onLogin} />
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div className="form-footer" variants={itemVariants}>
              <div className="promo">
                <motion.div
                  className="promo-content"
                  animate={{
                    background: [
                      "linear-gradient(135deg, rgba(0, 255, 0, 0.1), rgba(0, 204, 0, 0.1))",
                      "linear-gradient(135deg, rgba(143, 38, 38, 0.82), rgba(0, 204, 0, 0.2))",
                      "linear-gradient(135deg, rgba(0, 255, 0, 0.1), rgba(0, 204, 0, 0.1))",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                  <span className="promo-icon">🎯</span>
                  <div className="promo-text">
                    <strong>¡Oferta de Bienvenida!</strong>
                    <span>20% OFF en tu primera reserva</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default AuthPage
