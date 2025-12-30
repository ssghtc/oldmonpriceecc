import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const size = {
    width: 32,
    height: 32,
};
export const contentType = 'image/png';

// Image generation
export default function Icon() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    fontSize: 18,
                    background: '#3e2723', // Dark brown
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fb8c00', // Gold/Amber
                    borderRadius: '50%',
                    fontWeight: 800,
                    border: '2px solid #fb8c00',
                }}
            >
                OM
            </div>
        ),
        // ImageResponse options
        {
            ...size,
        }
    );
}
