import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex h-screen items-center justify-center bg-light-gray '>
      <div className='flex flex-col items-center p-4 bg-white rounded-xl max-w-sm shadow-md'>
        <div className=' relative w-full h-[350px] overflow-hidden rounded-xl'>
          <Image
            src='/image-qr-code.png'
            alt='QR Code'
            className='object-fill'
            fill
          />
        </div>
        <div className='flex flex-col gap-y-6 my-6 px-5'>
          <h1 className='text-center text-2xl text-dark-blue font-bold  '>
            Improve your front-end skills by building projects
          </h1>
          <p className='text-center text-grayish-blue font-normal opacity-50 text-lg'>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  )
}
