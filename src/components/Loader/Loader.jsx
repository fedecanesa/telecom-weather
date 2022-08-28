import { motion } from "framer-motion";
import './loader.scss'

const loadingContainerVariants = {
    start: {
        transition: {
            staggerChildren: 0.2,
        },
    },
    end: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const loadingCircleVariants = {
    start: {
        y: "0%",
    },
    end: {
        y: "60%",
    },
};
const loadingCircleTransition = {
    duration: 0.4,
    yoyo: Infinity,
    ease: 'easeInOut'
}

const Loader = () => {
    return (
        <div className='loader'>
            <div>
                <motion.div
                    className='loadingContainer'
                    variants={loadingContainerVariants}
                    initial="start"
                    animate="end"
                >
                    <motion.span
                        className='loadingCircle'
                        variants={loadingCircleVariants}
                        transition={loadingCircleTransition}
                    ></motion.span>
                    <motion.span
                        className='loadingCircle'
                        variants={loadingCircleVariants}
                        transition={loadingCircleTransition}
                    ></motion.span>
                    <motion.span
                        className='loadingCircle'
                        variants={loadingCircleVariants}
                        transition={loadingCircleTransition}
                    ></motion.span>
                </motion.div>
            </div>
        </div>
    )
}

export default Loader;