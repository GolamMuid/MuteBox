"use client";

export const Menu = ({ children }: { children: React.ReactNode }) => {
  return (
    <nav className="relative rounded-full border border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input flex justify-between space-x-4 px-8 py-4 items-center">
      <div className="text-3xl font-bold text-sky-800">Mute Box</div>
      {children}
    </nav>
  );
};
