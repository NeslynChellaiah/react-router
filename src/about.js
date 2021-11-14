import { motion } from "framer-motion";

const About = ({pageVariants}) => {
    return (
        <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="about"
              >
             <motion.h1
                initial={{opacity: 0}}
                animate={{rotate: 360, opacity: 1}}
                transition={{delay: 0.4, duration: 0.5}}
             >About</motion.h1>
        </motion.div>
    )
}

export default About;