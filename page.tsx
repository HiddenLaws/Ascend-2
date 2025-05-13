import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen px-6 py-12 max-w-3xl mx-auto text-center space-y-8">
      <h1 className="text-4xl font-bold leading-tight">Ascend</h1>
      <p className="text-lg text-muted-foreground max-w-xl mx-auto">
        A sacred path of awakening — through presence, stillness, and inner initiation.
        Begin your journey below.
      </p>
      <div className="space-y-4">
        <Link
          href="/pre-module"
          className="block px-6 py-3 text-lg font-medium bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
        >
          Pre-Module: Meditation Foundation
        </Link>
        <Link
          href="/module-0"
          className="block px-6 py-3 text-lg font-medium bg-black text-white rounded-xl hover:bg-gray-800 transition"
        >
          Module 0: The Discipline of Meditation
        </Link>
        <Link
          href="/dark-night"
          className="block px-6 py-3 text-lg font-medium bg-red-600 text-white rounded-xl hover:bg-red-700 transition"
        >
          Dark Night of the Soul (Support Module)
        </Link>
      </div>
    </main>
  );
}
