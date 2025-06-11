import { ReactNode } from 'react';
import { AnimatePresence,motion } from 'framer-motion';
export function MegaMenu({ children,directionToView = 'right' }: { children: ReactNode,directionToView:string }) {
    let viewDirection = (directionToView == 'right') ? 100 : -100;
    return (
        <div className='fixed left-0 right-0 w-screen z-[10000]' style={{ top: '225px', height: 'calc(100vh - 100px)' }}>
            <div 
                className='w-full bg-white h-full max-h-[60dvh] my-container border-b'>
                <motion.div
                    initial={{ opacity: 0, x: viewDirection }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0}}
                    transition={{ type: 'tween',duration:0.1}}  
                >
                    {children}
                </motion.div>
            </div>
        </div>
    );
}