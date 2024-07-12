import React from 'react';
import Label from './Label';

const FormData: React.FC = () => {
  return (
    <div>
      <div>
        <h1 className='text-5xl my-12 font-regular font-Mulish'>Fill this form</h1>
      </div>
      <form>
        <div className='grid md:grid-cols-2 md:grid-flow-row md:gap-x-64'>
          <div className='grid'>
            <Label htmlFor="firstname">First Name:</Label>
            <input type="text" id="firstname" name="firstname" className='h-10 md:input-field md:mb-5 md:mt-3 mb-3 mt-1' required />
          </div>
          <div className='grid'>
            <Label htmlFor="lastname">Last Name:</Label>
            <input type="text" id="lastname" name="lastname" className='h-10 md:input-field md:mb-5 md:mt-3 mb-3 mt-1' required />
          </div>
          <div className='grid'>
            <Label htmlFor="email">Email:</Label>
            <input type="email" id="email" name="email" className='h-10 md:input-field md:mb-5 md:mt-3 mb-3 mt-1' required />
          </div>
          <div className='grid'>
            <Label htmlFor='city'>City:</Label>
            <input type='text' id='city' name='city' className='h-10 md:input-field md:mb-5 md:mt-3 mb-3 mt-1' required />
          </div>
          <div className='grid'>
            <Label htmlFor="jobrole">Job Role:</Label>
            <input type='text' id="jobrole" name="jobrole" className='h-10 md:input-field md:mb-5 md:mt-3 mb-3 mt-1' required />
          </div>
          <div className='grid'>
            <Label htmlFor='Address'>Address:</Label>
            <input type='text' id='Address' name='Address' className='h-10 md:input-field md:mb-5 md:mt-3 mb-3 mt-1' required />
          </div>
          <div className='grid'>
            <Label htmlFor='zip'>Zip Code:</Label>
            <input type='text' id='zip' inputMode='numeric' name='zip' pattern='[0-9]*' className='h-10 md:input-field md:mb-5 md:mt-3 mb-3 mt-1' required />
          </div>
          <div className='grid'>
            <Label htmlFor='uploadCv'>Upload Your CV</Label>
            <input type='file' id='uploadCv' name='uploadCv' className='h-10 md:input-field md:mb-5 md:mt-3 mb-3 mt-1' required />
          </div>
        </div>
        <div>
          <button type='submit' className='bg-customBlue text-white font-regular text-xl mt-2 w-40 h-10 md:mt-12 md:w-52 md:h-14 md:py-2 md:px-4 uppercase'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default FormData;
