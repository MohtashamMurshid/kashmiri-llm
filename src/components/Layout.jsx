import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-kashmiri-paper font-sans text-kashmiri-wood relative overflow-hidden">
      {/* Background Pattern Overlay */}
      <div 
        className="fixed inset-0 opacity-5 pointer-events-none z-0"
        style={{ 
          backgroundImage: "url('/images/pattern.png')",
          backgroundSize: '400px'
        }}
      />
      
      {/* Content */}
      <main className="relative z-10">
        {children}
      </main>
    </div>
  );
};

export default Layout;
