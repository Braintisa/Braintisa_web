import React from "react";
import {motion} from "framer-motion";
import SectionParticles from "@/components/SectionParticles.tsx";

const preloaderVariants = {
    initial: {
        opacity: 1,
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.8,
            ease: [0.6, 0.01, 0.05, 0.9]
        }
    }
};

const componentVariants = {
    animate: {
        scale: [1, 1.1, 1],
        opacity: [1, 0.7, 1],
        transition: {
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
        }
    }
}

const Preloader: React.FC = () => {
    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center gradient-subtle"
            variants={preloaderVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <SectionParticles opacity={0.9} />
            <motion.div
                className="text-center"
                variants={componentVariants}
                animate="animate"
            >
                <div className="preloader-logo text-5xl font-bold dark:text-white">
                    Brain<span className="text-primary">t</span>isa
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Preloader;