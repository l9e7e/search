import { Ref, SyntheticEvent } from 'react';
import { Goods } from './App';

interface GoodsList {
  goodsList: Goods[];
  goodsRef: Ref<HTMLDivElement>;
}

export default function GoodsList({ goodsList, goodsRef }: GoodsList) {
  return (
    <div className='flex flex-wrap'>
      {goodsList.map((goods, index) => {
        return (
          <div key={index} className='basis-1/2' ref={goodsRef}>
            <div className='relative'>
              <img
                className='!h-[226px]'
                src={goods.imageUrl}
                onError={(e: SyntheticEvent<HTMLImageElement, Event>) => {
                  e.currentTarget.src = '/img_default.jpeg';
                }}
              />
              {goods.isExclusive && (
                <span className='text-[12px] font-normal leading-[18px] -tracking-[0.5px] absolute -bottom-[12px] left-[10px] text-white bg-[#18A286] px-[6px] py-[4px]'>
                  단독
                </span>
              )}
            </div>
            <div className='mx-[10px] mb-[20px]'>
              <p className='text-[11px] font-normal leading-[16px] mt-[20px]'>
                {goods.brandName}
              </p>
              <p className='mt-[8px] text-[14px] font-bold leading-[18px] line-clamp-2 break-all'>
                {goods.goodsName}
              </p>
              <div className='mt-[4px] flex justify-between'>
                <span className='text-[16px] font-medium leading-[24px]'>
                  {goods.price.toLocaleString()}원
                </span>
                <span className='text-[16px] font-medium leading-[24px] text-[#FF0000]'>
                  {goods.saleRate}%
                </span>
              </div>
              <p className='text-[11px] font-normal leading-[12px] line-through text-[#AAAAAA]'>
                {goods.normalPrice.toLocaleString()}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}