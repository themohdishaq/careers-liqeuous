import Image from 'next/image';
import FormData from '@/components/formData'; 


interface Benefit {
  title: string;
  description: string;
  image: string;
}

export default function Home() {
  const benefits: Benefit[] = [
    {
      title: 'Team work',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.',
      image: '/team.png',
    },
    {
      title: 'Secured Future',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.',
      image: '/secrdfts.png',
    },
    {
      title: 'Learning and Opportunity',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.',
      image: '/learning.png',
    },
    {
      title: 'Upgrade Skills',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.',
      image: '/upgradeskills.png',
    },
  ];
  return (
    <>
      <section
        className="section bg-cover mt-6 w-full relative"
        style={{
          height: '450px',
          backgroundImage: `url('/joinus.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
      <div className="max-w-6xl mx-auto absolute inset-0 flex flex-col items-start justify-center py-20 ">
        <div className="max-w-md space-y-4">
          <h1 className=" text-white text-5xl px-3 sm:px-0 sm:text-7xl font-light leading-tight">Join Us!</h1>
          <p className="text-white font-regular font-outfit sm:text-border text-xl sm:text-2xl px-3 sm:px-0 ">Find the job opportunity that is right for you, get to know us better, and learn about everything we have to offer. We look forward to welcoming you to the Schoenherr team!</p>
          <div className="space-x-4 p-3 sm:p-0">
            <button className="bg-transparent border-2 border-white hover:bg-blue-700 text-white font-regular py-2 px-4 uppercase">Get in Touch</button>
            <button className="bg-customBlue text-white font-regular py-2 px-4 uppercase">Apply Now</button>  
          </div>
        </div>
      </div>
      </section>
      
    <div className="max-w-7xl mx-auto">
      
      <div className="grid px-6 py-6 w-full sm:max-w-6xl sm:px-4 sm:mx-10 sm:my-[80px] sm:grid-cols-1 sm:gap-4 md:grid-cols-2 md:gap-8">
        <div>
          <h4 className="text-blue-600 font-medium font-Mulish capitalize text-[18px]">BENEFITS</h4>
          <div >
            <p className="text-3xl  md:text-5xl sm:text-3xl font-Mulish sm:leading-[55px] ">
            Why you should <a href="#" className="text-sky-600">Join</a> Our Awesome Team
            </p>
            <p className='mt-2 md:mt-5 sm:mt-4 font-outfit md:text-2xl sm:text-xl'>
              We want you to feel at home when you are working at Liqueous & for that we have curated a great set of benefits for you.
            </p>
          </div>
        </div>
        <div className="grid gap-1 sm:grid-cols-2 md:gap-4 ">
            {benefits.map((benefit, key) => (
              <div className="card h-auto sm:h-[224px]  w-[209px]" key={key}>
                <div className="card-image bg-sky-600 rounded h-[50px] w-[50px] sm:h-[60px] sm:w-[60px] md:h-[74px] md:w-[74px]  flex items-center justify-center">
                  <Image className="w-6 h-6 sm:w-[30px] sm:h-[30px] md:w-[38px] md:h-[38px] object-cover" src={benefit.image} alt={benefit.title} width={74} height={74} />
                </div>
                <div className="card-content">
                  <h4 className="font-medium sm:font-regular font-Mulish text-xl md:text-2xl">{benefit.title}</h4>
                  <p className='max-w-56 max-h-full sm:w-[150px] md:h-[100px]  font-light font-outfit text-sm overflow-hidden'>{benefit.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    
    <section className='w-full h-[850px] flex flex-col justify-center items-center bg-bgform'>
    
     <FormData/>

    </section>
  </div>
</>
  );
}