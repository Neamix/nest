import { ReactNode } from 'react';

export function MegaMenu({ children }: { children: ReactNode }) {
    return (
        <div className="megaMenu">
            {children}
        </div>
    );
}