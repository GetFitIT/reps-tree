import '../styles/globals.css';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'GetFit Technologies',
  description: 'GetFit Technologies',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="bg-cover bg-center bg-no-repeat text-gray-900" style={{ backgroundImage: 'url(/images/Background.png)' }}>
          <div className="container mx-auto px-4 py-8">
            {/* Profile Image */}
            <div>
              <div className="flex flex-col-reverse sm:flex-row items-start inner-header">
                <div className="flex flex-col pr-8">
                  <h1 style={{ color: '#05BFF2' }} className="font-bold text-3xl md:text-6xl tracking-tight mb-1">
                    GetFit <br /> Technologies <br /> Limited
                  </h1>
                  <p className="text-black md:text-3xl font-bold mb-4">
                    At GetFit we offer quality and very effective fitness wearable products! Burn belly fat like magic! The Best Waist Belly trimmers in Africa.
                  </p>
                </div>
                <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
                  <Link
                  href={'/'}
                  >
                  <Image
                    alt="GetFit"
                    src="/images/ZWecWsaEFVmi.png"
                    width={176}
                    height={176}
                    style={{ color: 'transparent' }}
                  />
                  </Link>
                </div>
              </div>
            </div>

            {children}

            {/* Footer */}
            <footer className="text-black py-6 text-sm">
              <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-6">
                    <h4 className="text-md font-bold mb-3">ABUJA OFFICE</h4>
                    <p>8A Port Novo Street, Off lingu crescent Aminu Kano, Wuse 2 Abuja</p>
                    <p>Abuja Office line: (+234)-908-749-3041</p>
                  </div>
                  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-6">
                    <h4 className="text-md font-bold mb-3">LAGOS OFFICE</h4>
                    <p>Sf04 Second Floor, Jubilee Mall Plot 15. Admiralty way lekki phase 1 Lagos</p>
                    <p>Lagos Office line: (+234)-816-076-4320</p>
                  </div>
                  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-6">
                    <h4 className="text-md font-bold mb-3">ALLEN STORE</h4>
                    <p>No 93, Allen Avenue,</p>
                    <p> Ikeja, Lagos</p>
                  </div>
                </div>
                <hr className="border-gray-700 my-6" />
                <div className="my-auto">
                  <p className="text-center text-sm">&copy; 2023 GetFit Technologies. All rights reserved.</p>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
