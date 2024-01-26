import Image from 'next/image';
import Head from 'next/head'
// import { redirect } from 'next/navigation';
import { Representative } from './types';
import Link from 'next/link';
import { reps } from './rep';

export type LinkType = {
  href: string;
  title: string;
};

export default async function HomePage() {

  return (
    <>
      {/* Links */}
      <div className="grid grid-cols-1 gap-4 mx-auto">

        <h1 className='font bold mb-8 text-black text-xl'>Speak with a customer representative.</h1>
        {reps.map((rep: Representative) => (
                <Link href={`rep/${rep.slug}`} style={{ backgroundImage: 'url(/images/whatsapp-2.png)' }} className="p-4 bg-blue-500 hover:bg-blue-600 rounded-lg shadow-lg text-center button">
          <span className="text-xl text-white font-semibold">{rep.name}</span>
        </Link>
      ))}
      </div>
    </>
  );
}
