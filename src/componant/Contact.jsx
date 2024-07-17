import React from 'react';
import contact1 from './img/contact1.png';
import contact2 from './img/contact2.png';
import contact3 from './img/contact3.png';
import contact4 from './img/contact4.png';
const Contact = () => {
    return (
        <>
            <div className='h-[300px] w-[1366px]'>
                <div className=' pt-[130px] w-[110px] h-[21px] text-[18px] text-[#000000] ml-[624px] '>Get in touch</div>
                <div className=' pt-[30px] w-[120px] h-[36px] text-[#000000] text-[31px] ml-[624px]'>Contact</div>
            </div>
            <div className='flex h-[400px]'>
                <div className='ml-[168px] w-[233px] h-[233px] bg-[#F1F1F1]'>
                   <div className='w-[40.2px] h-[38.19px] ml-[40px] pt-[50px]'><img src={contact1} alt="" srcset="" /></div>
                   <div className='ml-[25px] pt-[40px] w-[113px] h-[21px] text-[18px] text-[#1F2B6C]'>Emergency</div>
                   <div className='ml-[30px] pt-[30px] w-[138px] h-[22px] text-[16px] text-[#1F2B6C]'>(237) 681-812-255</div>
                   <div className= 'ml-[30px] pt-[30px] w-[138px] h-[22px] text-[16px] text-[#1F2B6C]'>(237) 681-812-255</div>
                </div>
                <div className=' ml-[30px] w-[233px] h-[233px] bg-[#F1F1F1]'>
                   <div className='w-[40.2px] h-[38.19px] ml-[40px] pt-[50px]'><img src={contact2} alt="" srcset="" /></div>
                   <div className='ml-[25px] pt-[50px] w-[113px] h-[21px] text-[18px] text-[#1F2B6C]'>Emergency</div>
                   <div className='ml-[30px] pt-[30px] w-[138px] h-[22px] text-[16px] text-[#1F2B6C]'>(237) 681-812-255</div>
                   <div className= 'ml-[30px] pt-[30px] w-[138px] h-[22px] text-[16px] text-[#1F2B6C]'>(237) 681-812-255</div>
                </div>
                <div className='ml-[30px] w-[233px] h-[233px] bg-[#F1F1F1]'>
                   <div className='w-[40.2px] h-[38.19px] ml-[40px] pt-[50px]'><img src={contact3} alt="" srcset="" /></div>
                   <div className='ml-[25px] pt-[40px] w-[113px] h-[21px] text-[18px] text-[#1F2B6C]'>Emergency</div>
                   <div className='ml-[30px] pt-[30px] w-[138px] h-[22px] text-[16px] text-[#1F2B6C]'>(237) 681-812-255</div>
                   <div className= 'ml-[30px] pt-[30px] w-[138px] h-[22px] text-[16px] text-[#1F2B6C]'>(237) 681-812-255</div>
                </div>
                <div className='ml-[30px] w-[233px] h-[233px] bg-[#F1F1F1]'>
                   <div className='w-[40.2px] h-[38.19px] ml-[40px] pt-[50px]'><img src={contact4} alt="" srcset="" /></div>
                   <div className='ml-[25px] pt-[40px] w-[113px] h-[21px] text-[18px] text-[#1F2B6C]'>Emergency</div>
                   <div className='ml-[30px] pt-[30px] w-[138px] h-[22px] text-[16px] text-[#1F2B6C]'>(237) 681-812-255</div>
                   <div className= 'ml-[30px] pt-[30px] w-[138px] h-[22px] text-[16px] text-[#1F2B6C]'>(237) 681-812-255</div>
                </div>
            </div>

        </>
    );
};

export default Contact;
