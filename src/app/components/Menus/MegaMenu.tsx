import { ReactNode } from 'react';

export function MegaMenu({ children }: { children: ReactNode }) {
    return (
        <div className='fixed left-0 right-0 w-screen z-50 bg-[#0004]' style={{ top: '230px', height: 'calc(100vh - 100px)' }}>
            <div className='w-full bg-white h-full max-h-[60dvh] my-container'>
                dasdas
            </div>
        </div>
    );
}