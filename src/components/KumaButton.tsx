import React from 'react';
import '../components/KumaButton.styles.css';

interface KumaButtonProps {
    primary?: boolean;
    backgroundColor?: string;
    size?: 'small' | 'medium' | 'large';
    label: string;
    onClick?: () => void;
}

export const KumaButton = ({
    primary = false,
    size = 'medium',
    backgroundColor,
    label,
    ...props
}: KumaButtonProps) => {
    const mode = primary ? 'kuma-button--primary' : 'kuma-button--secondary';
    return (
        <button
            type="button"
            className={['kuma-button', `kuma-button--${size}`, mode].join(' ')}
            style={{ backgroundColor }}
            {...props}
        >
            {label}
        </button>
    );
};
