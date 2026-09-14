import React from "react";

export function ReactIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <ellipse cx="12" cy="12" rx="10" ry="4.5" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(0 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="2" fill="#61DAFB" />
    </svg>
  );
}

export function NextIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.373 24 0 18.627 0 12S5.373 0 12 0c6.627 0 12 5.373 12 12 0 3.584-1.572 6.801-4.067 9.001l-9.288-12.793H8.355v11.584h2.155V12.71l8.155 11.268z" fill="#FFFFFF"/>
    </svg>
  );
}

export function TypeScriptIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <path d="M11.5 10H7v2h2v7h2.5v-7h2v-2h-2zM15 15.5c.6.4 1.3.7 2.1.7 1 0 1.5-.4 1.5-1 0-1.5-3.3-.8-3.3-3.2 0-1.4 1.2-2.3 3.1-2.3.9 0 1.7.2 2.3.6l-.6 1.8c-.5-.3-1.1-.5-1.7-.5-.7 0-1.1.3-1.1.7 0 1.4 3.3.7 3.3 3.2 0 1.6-1.3 2.5-3.3 2.5-1.1 0-2.1-.3-2.8-.8l.8-1.7z" fill="#FFFFFF" />
    </svg>
  );
}

export function NodeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M12 2L2 7.7v11.5L12 25l10-5.8V7.7L12 2zm0 3.2l6.8 3.9v7.8L12 20.8l-6.8-3.9V9.1L12 5.2z" fill="#5FA04E" />
      <path d="M12 11.5l3.5 2v4L12 19.5l-3.5-2v-4l3.5-2z" fill="#5FA04E" />
    </svg>
  );
}

export function FlutterIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M14.314 0L2.3 12l3.7 3.7L18.014 3.7z" fill="#47C5FB" />
      <path d="M14.314 12L9.5 16.814l3.7 3.7 4.814-4.814z" fill="#47C5FB" />
      <path d="M18.014 21.314l-4.814-4.814 3.7-3.7 4.814 4.814z" fill="#00569E" />
    </svg>
  );
}

export function LaravelIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm7.5 14.1l-7.5 3.8-7.5-3.8V8.9l7.5-3.8 7.5 3.8v7.2z" fill="#FF2D20" />
      <path d="M12 9l5 2.5v5L12 19l-5-2.5v-5L12 9z" fill="#FF2D20" />
    </svg>
  );
}

export function TailwindIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M12 6c-3.314 0-5.5 1.657-6.5 4.971 1.314-1.314 2.814-1.814 4.5-1.5 1.057.196 1.814.964 2.65 1.814C14.007 12.65 15.586 14.25 19.5 14.25c3.314 0 5.5-1.657 6.5-4.971-1.314 1.314-2.814 1.814-4.5 1.5-1.057-.196-1.814-.964-2.65-1.814C17.493 7.6 15.914 6 12 6zM5.5 14.25c-3.314 0-5.5 1.657-6.5 4.971 1.314-1.314 2.814-1.814 4.5-1.5 1.057.196 1.814.964 2.65 1.814 1.357 1.364 2.936 2.964 6.85 2.964 3.314 0 5.5-1.657 6.5-4.971-1.314 1.314-2.814 1.814-4.5 1.5-1.057-.196-1.814-.964-2.65-1.814-1.357-1.364-2.936-2.964-6.85-2.964z" fill="#06B6D4" />
    </svg>
  );
}

export function JavaScriptIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4" fill="#F7DF1E" />
      <path d="M13.5 18.5v-2.3c.5.3 1.1.5 1.7.5.8 0 1.2-.4 1.2-1.1 0-1.6-3.4-.8-3.4-3.4 0-1.6 1.3-2.6 3.4-2.6 1 0 1.8.2 2.5.6l-.7 2c-.6-.3-1.2-.5-1.8-.5-.7 0-1 .3-1 .7 0 1.6 3.4.8 3.4 3.4 0 1.8-1.4 2.7-3.6 2.7-1.1 0-2.1-.3-2.7-.8zM7 18.5v-2c.4.3.9.5 1.5.5.7 0 1-.3 1-.9v-6.3h2.4v6.5c0 1.9-1.2 2.7-3.1 2.7-.6 0-1.3-.2-1.8-.5z" fill="#000000" />
    </svg>
  );
}

export function PostgreSqlIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M17.5 10.5c-.8-1.5-2.2-2.5-3.8-2.8-.2-.8-.7-1.5-1.4-2-.2-.2-.5-.3-.8-.3-.5 0-.9.2-1.2.6-.4-.3-.9-.5-1.5-.5-1.2 0-2.2.8-2.6 2-.9.2-1.7.8-2.1 1.6C3.4 10.5 3 12.1 3 13.8c0 3.2 2.3 5.8 5.4 6.2h.5c.3 0 .6-.2.8-.5l.4-.7c.6.2 1.3.3 2 .3 1.8 0 3.4-.8 4.4-2.1.8.1 1.6-.1 2.3-.6 1.1-.9 1.7-2.3 1.7-3.7-.1-1-.4-1.9-1-2.2zm-1.8 4.8c-.5.4-1.2.6-1.9.5l-.3.4c-.8 1-2.1 1.6-3.5 1.6-.5 0-1-.1-1.5-.2l-.6 1.1c-2.4-.4-4.2-2.4-4.2-4.9 0-1.4.4-2.7 1-3.6.3-.5.8-.9 1.4-1.1l.6 1.7 1.6-.6-.6-1.7c.3-.1.7-.1 1-.1.4 0 .8.1 1.1.3l-.5 1.6 1.6.5.5-1.5c.3.3.6.7.7 1.2l-.9.6 1 1.5.9-.6c.2.5.3 1 .3 1.5 0 .9-.4 1.7-1.1 2.2z"
        fill="#336791"
      />
    </svg>
  );
}

export function GitIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="5" fill="#F05032" />
      <path
        d="M18.15 11.23l-5.38-5.38a1.2 1.2 0 00-1.7 0l-1.16 1.16 2.14 2.14a1.42 1.42 0 011.8 1.8l2.06 2.06a1.42 1.42 0 011.24.22 1.42 1.42 0 01-1 2.43 1.42 1.42 0 01-1.42-1.42c0-.23.05-.44.15-.63L13 11.75v3.83a1.42 1.42 0 11-1.25 0V11.5a1.42 1.42 0 01-.76-1.25c0-.39.16-.74.42-1L9.26 7.1l-3.4 3.4a1.2 1.2 0 000 1.7l5.38 5.38a1.2 1.2 0 001.7 0l5.21-5.21a1.2 1.2 0 000-1.74z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function PythonIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M11.9 2c-3.1 0-4.9 1.4-4.9 3.5v2.6h5v.8H5c-2.3 0-3.5 1.7-3.5 4.3 0 2.8 1.3 4.3 3.5 4.3h1.7v-2.3c0-2.3 1.9-4.2 4.2-4.2h5V8.5c0-2.3-1.6-3.8-4-3.8V2zm-2.4 1.8c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z" fill="#3776AB" />
      <path d="M12.1 22c3.1 0 4.9-1.4 4.9-3.5v-2.6h-5v-.8h7c2.3 0 3.5-1.7 3.5-4.3 0-2.8-1.3-4.3-3.5-4.3h-1.7v2.3c0 2.3-1.9 4.2-4.2 4.2h-5v2.5c0 2.3 1.6 3.8 4 3.8V22zm2.4-1.8c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" fill="#FFD43B" />
    </svg>
  );
}

export function PhpIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <ellipse cx="12" cy="12" rx="10" ry="6" fill="#777BB4" />
      <path d="M7 14V10h2c1 0 1.5.5 1.5 1s-.5 1-1.5 1H8v2H7zm4 0V10h1v4h-1zm3 0V10h2c1 0 1.5.5 1.5 1s-.5 1-1.5 1h-1v2h-1z" stroke="#FFFFFF" strokeWidth="1.2" />
    </svg>
  );
}

export function MongoDbIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M12 2C11.5 4 8 8 8 13c0 3.8 2.5 6.8 4 8.5 1.5-1.7 4-4.7 4-8.5 0-5-3.5-9-4-11z" fill="#47A248" />
      <path d="M12 2.5v17.5c.3-.3 4-4.5 4-7 0-5-3.5-9-4-10.5z" fill="#4CAF50" />
    </svg>
  );
}

export function MySqlIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M4 16c2-4 6-6 10-5 3 .8 5 3 6 5-3-1-7-1-10 0-2 .7-4 1-6 0z" fill="#00758F" />
      <circle cx="16" cy="10" r="1.5" fill="#F29111" />
    </svg>
  );
}

export function DockerIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M22 13c-.5-1.5-1.7-2.5-3.2-2.7-.4-.8-1-1.5-1.8-2l-.5.5c.6.8.8 1.8.5 2.7-.7.2-1.5.8-1.8 1.5H3c-.6 2.5 1 5 3.5 6 3 1.2 7.5 1 10.5-.5 3-1.5 4.5-3.5 5-5.5z" fill="#2496ED" />
      <rect x="7" y="10" width="2" height="2" fill="#2496ED" />
      <rect x="10" y="10" width="2" height="2" fill="#2496ED" />
      <rect x="13" y="10" width="2" height="2" fill="#2496ED" />
      <rect x="10" y="7" width="2" height="2" fill="#2496ED" />
    </svg>
  );
}

export function VsCodeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M17.5 2L6 11.5 2 8.5v7l4-3 11.5 9.5 4.5-2V4l-4.5-2z" fill="#007ACC" />
      <path d="M17.5 2v20l4.5-2V4l-4.5-2z" fill="#1F9CF0" />
    </svg>
  );
}

export function FigmaIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect x="7" y="2" width="5" height="5" rx="2.5" fill="#F24E1E" />
      <rect x="12" y="2" width="5" height="5" rx="2.5" fill="#FF7262" />
      <rect x="7" y="7" width="5" height="5" rx="2.5" fill="#A259FF" />
      <circle cx="14.5" cy="9.5" r="2.5" fill="#1ABCFE" />
      <path d="M7 14.5a2.5 2.5 0 005 0v-2.5H7v2.5z" fill="#0ACF83" />
    </svg>
  );
}

export function FirebaseIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M4 18l8 4 8-4-3-15-5 8-3-4-5 11z" fill="#FFCA28" />
      <path d="M12 22l8-4-3-15-5 19z" fill="#FFA000" />
      <path d="M12 11l-3-4-5 11 8 4V11z" fill="#F57C00" />
    </svg>
  );
}

export function ExpressIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <text x="3" y="16" fill="#FFFFFF" fontSize="11" fontWeight="bold" fontFamily="sans-serif">ex</text>
    </svg>
  );
}

export function StripeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4" fill="#635BFF" />
      <path d="M13.5 10.5c0-.8-.6-1.2-1.6-1.2-1.2 0-2.2.4-3 .9V8c.9-.4 2-.6 3.1-.6 2.4 0 3.9 1.2 3.9 3.2 0 3.1-4.2 2.6-4.2 3.9 0 .9.8 1.2 1.8 1.2 1.3 0 2.5-.5 3.3-1.1v2.2c-1 .5-2.2.7-3.4.7-2.6 0-4.2-1.3-4.2-3.3 0-3.3 4.3-2.7 4.3-3.9z" fill="#FFFFFF" />
    </svg>
  );
}
