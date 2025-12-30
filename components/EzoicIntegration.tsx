'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

declare global {
    interface Window {
        ezstandalone?: {
            cmd: Array<() => void>;
            showAds: (placeholderId?: number, placeholderId2?: number) => void;
            destroyPlaceholders: (placeholderId?: number, placeholderId2?: number) => void;
            define?: (placeholderIds: number[]) => void;
            enable?: () => void;
            display?: () => void;
            init?: () => void;
        };
    }
}

export default function EzoicIntegration() {
    const pathname = usePathname();

    useEffect(() => {
        // When the path changes, we tell Ezoic to refresh ads.
        // However, the initial load is handled by the script in layout.
        // We only want to trigger this on subsequent client-side navigations if needed.
        // But the docs say: "When switching between pageviews dynamically, it is important to re-call ezstandalone.showAds()"

        // We wrap this in a timeout or check if ezstandalone is ready
        if (typeof window !== 'undefined' && window.ezstandalone) {
            try {
                window.ezstandalone.cmd.push(() => {
                    // Docs rely on showAds() to refresh. 
                    // We might need to handle specific placeholders depending on the page, 
                    // but calling it empty refreshes defined placeholders.
                    window.ezstandalone?.showAds();
                });
            } catch (e) {
                console.error('Ezoic error:', e);
            }
        }
    }, [pathname]);

    return null;
}
