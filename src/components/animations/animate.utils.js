export const containerVariants = {
    initial: {
        opacity: 0,
        x: -25,
    },
    end: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'tween', 
            delay: 0.15,
            duration: 0.9
        }
    },
    end2: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'tween',
            delay: 0.3,
            duration: 0.9
        }
    },
    end3: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'tween',
            delay: 0.45,
            duration: 0.9
        }
    }
}

export const growInVariants = {
    initial: {
        opacity: 0,
        scale: 0.1,
    },
    end: {
        opacity: 1,
        scale: 1,
        transition: {
            type: 'spring',
            stiffness: 30,
            delay: 0.1,
            duration: 0.3,

        }
    }
}

export const arrowVariant1 = {
    initial: {
        opacity: 0,
        scale: 0.1,
    },
    end: {
        opacity: 1,
        scale: 1,
        transition: {
            type: 'spring',
            stiffness: 100,
            delay: 0.1,
            duration: 0.3,

        }
    }
}

export const arrowVariant2 = {
    initial: {
        opacity: 0,
        scale: 0.1,
    },
    end: {
        opacity: 1,
        scale: 1,
        transition: {
            type: 'spring',
            stiffness: 100,
            delay: 0.4,
            duration: 0.3,

        }
    }
}