import { Rep } from '@/app/types';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { reps } from '@/app/rep';


// export const generateMetadata = (rep: Rep) => ({
//     title: `${rep.name ?? 'Customer Rep'} - GetFit Technologies`,
//     description: `Order on GetFit Technologies`,
//     image: 'https://getfit.ng/marketplace/1/images/thumbnail/ZWecWsaEFVmi.png',
//     url: `https://getfit.ng/rep/${rep.slug}`,
// });

export default function Page({ params }: { params: { slug: string } }) {

    const rep = reps.find((rep) => rep.slug === params.slug);

    if (!rep) {
        redirect('https://link.getfit.ng')
    }

    return (
        <>
            <div className="grid grid-cols-1 gap-4 mx-auto">

                <h2 className='font bold mb-8 text-black text-xl'>Speak with {rep.name}.</h2>

            </div>
            <div className="grid grid-cols-1 gap-4 mx-auto">
                {rep.whatsapp && (
                    <a href={`https://api.whatsapp.com/send?phone=${rep.whatsapp}`} style={{ backgroundImage: 'url(/images/whatsapp-2.png)' }} className="p-4 bg-blue-500 hover:bg-blue-600 rounded-lg shadow-lg text-center button">
                        <span className="text-xl text-white font-semibold"><FaWhatsapp /> Order on Whatsapp</span>
                    </a>
                )}
                
                    <a href={`
                         https://www.instagram.com/getfitng/
                         `} style={{ backgroundImage: 'url(/images/whatsapp-2.png)' }} className="p-4 bg-blue-500 hover:bg-blue-600 rounded-lg shadow-lg text-center button">
                        <span className="text-xl text-white font-semibold"><FaInstagram /> Follow on Instagram</span>
                    </a>

                
                <a href='https://m.getfit.ng/instagram' style={{ backgroundImage: 'url(/images/whatsapp-2.png)' }} className="p-4 bg-blue-500 hover:bg-blue-600 rounded-lg shadow-lg text-center button">
                    <span className="text-xl text-white font-semibold">Order on Site</span>
                </a>
            </div>
        </>

    );
}
