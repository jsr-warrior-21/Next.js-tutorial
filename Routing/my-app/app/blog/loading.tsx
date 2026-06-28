export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="relative flex items-center justify-center">
        <div className="absolute w-16 h-16 rounded-full border-4 border-muted" />
        <div className="w-16 h-16 rounded-full border-4 border-transparent border-t-primary animate-spin" />
      </div>
      <p className="mt-5 text-sm font-medium text-muted-foreground tracking-widest uppercase animate-pulse">
        Loading…
      </p>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .animate-spin {
          animation: spin 0.85s linear infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        .animate-pulse {
          animation: pulse 1.8s ease-in-out infinite;
        }

        /* Fallback tokens for non-Tailwind or plain CSS setups */
        :root {
          --background: #f8f9fb;
          --muted: #e2e8f0;
          --muted-foreground: #94a3b8;
          --primary: #6366f1;
        }
        .bg-background   { background-color: var(--background); }
        .border-muted    { border-color: var(--muted); }
        .border-t-primary { border-top-color: var(--primary); }
        .text-muted-foreground { color: var(--muted-foreground); }

        .flex            { display: flex; }
        .flex-col        { flex-direction: column; }
        .items-center    { align-items: center; }
        .justify-center  { justify-content: center; }
        .min-h-screen    { min-height: 100vh; }
        .relative        { position: relative; }
        .absolute        { position: absolute; }
        .w-16            { width: 4rem; }
        .h-16            { height: 4rem; }
        .rounded-full    { border-radius: 9999px; }
        .border-4        { border-width: 4px; }
        .border-transparent { border-color: transparent; }
        .mt-5            { margin-top: 1.25rem; }
        .text-sm         { font-size: 0.875rem; }
        .font-medium     { font-weight: 500; }
        .tracking-widest { letter-spacing: 0.15em; }
        .uppercase       { text-transform: uppercase; }
      `}</style>
    </div>
  );
}