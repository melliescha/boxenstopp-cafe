import type { SVGProps } from "react";

// Simple owl/circle mark for TripAdvisor (brand-friendly minimal mark)
export const TripAdvisorIcon = ({ size = 18, ...props }: SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M12 8.5c-1.6-1-3.6-1.6-5.8-1.6H1l1.9 2.1A4.6 4.6 0 0 0 6.7 17a4.6 4.6 0 0 0 4.1-2.5L12 16l1.2-1.5A4.6 4.6 0 0 0 17.3 17a4.6 4.6 0 0 0 3.8-7.9L23 6.9h-5.2c-2.2 0-4.2.6-5.8 1.6Zm-5.3 6.6a2.7 2.7 0 1 1 0-5.4 2.7 2.7 0 0 1 0 5.4Zm10.6 0a2.7 2.7 0 1 1 0-5.4 2.7 2.7 0 0 1 0 5.4Zm-10.6-1.4a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6Zm10.6 0a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6Z" />
  </svg>
);

export const GoogleIcon = ({ size = 18, ...props }: SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    aria-hidden="true"
    {...props}
  >
    <path fill="#EA4335" d="M12 10.2v3.9h5.5c-.2 1.4-1.6 4.1-5.5 4.1-3.3 0-6-2.7-6-6.1s2.7-6.1 6-6.1c1.9 0 3.1.8 3.8 1.5l2.6-2.5C16.7 3.4 14.6 2.5 12 2.5 6.8 2.5 2.7 6.6 2.7 12s4.2 9.5 9.4 9.5c5.4 0 9-3.8 9-9.2 0-.6-.1-1.1-.2-1.6H12Z"/>
  </svg>
);
