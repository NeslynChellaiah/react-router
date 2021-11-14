import { motion } from "framer-motion";

const Error = ({pageVariants}) => {
    return (
        <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="error"
              >
             <motion.h1
                initial={{y: -200, opacity: 0}}
                animate={{y: 0, opacity:1}}
                transition={{delay: 0.4, type:"spring", stiffness: 150}}
                type="spring"
             >404</motion.h1>
        </motion.div>
    )
}

export default Error;