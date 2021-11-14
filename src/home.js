import { motion } from "framer-motion";

const Home = ({pageVariants}) => {
    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="home"
        >
            <motion.h1
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 0.5, duration: 0.3}}
            >Home</motion.h1>
        </motion.div>
    )
}

export default Home;