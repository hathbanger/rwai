import Image from 'next/image';

export default function ImageTestPage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Image Test Page
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Testing different image loading approaches
        </p>
      </div>
      
      <div className="grid gap-8 md:grid-cols-2">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Next.js Image Component</h2>
          <div className="border p-4 flex justify-center">
            <Image
              src="/images/RWAi_logo-xs.png"
              alt="RWAi Logo"
              width={150}
              height={40}
              priority
              className="h-10 w-auto"
            />
          </div>
        </div>
        
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Standard HTML Image</h2>
          <div className="border p-4 flex justify-center">
            <img 
              src="/images/RWAi_logo-xs.png" 
              alt="RWAi Logo" 
              className="h-10 w-auto"
            />
          </div>
        </div>
        
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">SVG Direct</h2>
          <div className="border p-4 flex justify-center">
            <svg width="150" height="40" viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="8" fill="#0070F3"/>
              <path d="M14 20C14 16.6863 16.6863 14 20 14C23.3137 14 26 16.6863 26 20C26 23.3137 23.3137 26 20 26C16.6863 26 14 23.3137 14 20Z" fill="white"/>
              <path d="M50 14H54.5L60 26L65.5 14H70V28H66.5V19L61.5 30H58.5L53.5 19V28H50V14Z" fill="#111827"/>
              <path d="M75 14H79.5L85 26L90.5 14H95V28H91.5V19L86.5 30H83.5L78.5 19V28H75V14Z" fill="#111827"/>
              <path d="M100 14H113V17.5H103.5V19.5H112V23H103.5V25H113V28.5H100V14Z" fill="#111827"/>
            </svg>
          </div>
        </div>
        
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">SVG as Image</h2>
          <div className="border p-4 flex justify-center">
            <img 
              src="/logo.svg" 
              alt="Logo SVG" 
              className="h-10 w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 