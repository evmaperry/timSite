import Image from 'next/image';
import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import evanAndTim from '@/may_23_evan_and_tim.jpg';
import sunnyAndTim from '@/may_23_sunny_and_tim.jpeg';

export default function Home() {
  return (
    <div className='flex flex-col flex-1 items-center justify-center font-sans'>
      <main className='flex flex-1 w-full max-w-3xl flex-col items-center justify-start gap-y-4 py-16 px-4 sm:px-16 sm:items-start'>
        <header className={'mb-6'}>
          <div className={'text-4xl'}>Tim&apos;s Journey</div>
        </header>

        <div className={'entry-post'}>
          <div className={'entry-title-container'}>
            <div className='entry-title-text'>A new chapter</div>
            <div className='entry-subtitle-text'>May 26th, 2026</div>
          </div>

          <div className={'entry-body'}>
            <div>Hello friends and family,</div>
            <div>
              In early May, a series of events unfolded that has led to a new
              phase of care for Tim. He is at home and comfortable, but there
              have been significant changes to his health.
            </div>
            <div>
              About two weeks ago, Tim suffered a brain bleed after a fall. He
              was admitted to Munson and underwent emergency surgery, which
              stopped the bleeding; however, Tim didn&apos;t recover from his
              surgery as we hoped he would. Before his fall he was showing
              symptoms of stage 4 Parkinson&apos;s. His injury has significantly
              exacerbated those symptoms and his life expectancy is being
              measured in weeks.
            </div>
            <div>
              After consulting with medical professionals, we&apos;ve decided to
              adopt a palliative care approach with Tim. We brought Tim home on
              May 22nd and are working with Munson Hospice and other care
              providers on an in-home basis. This means we will give him comfort
              care, but not seek further medical intervention.
            </div>
            <div>
              Tim was relieved to get home. It&apos;s been wonderful for him to
              sleep and wake up in his own bed. We are thrilled to have him
              home. We are hoping that with better sleep, home-cooked meals and
              boat-loads of love his health can improve to some degree.
            </div>
            <div>
              As of writing, he recognizes us and can speak a little, but
              otherwise is very sleepy and requires around-the-clock care.
              He&apos;s more alert and talkative in the evenings—from about 4pm
              to 7pm. We&apos;d be delighted for you to visit, but ask that you
              do two things:
              <ol className={'list-decimal list pl-12 mt-2'}>
                <li>Plan your visit for the afternoon or evening</li>
                <li>
                  Text Anne, Scott or Evan to arrange the exact timing in
                  advance to avoid a crowd
                </li>
              </ol>
            </div>
            <div>
              Thank you so, so much for all of the love and support you&apos;ve
              shown us. And rest assured: our fridge is absolutely overflowing.
              We&apos;ll update this space periodically to let you know how
              things are going ❤️
            </div>
            <div>
              With love,
              <br />
              the Perry&apos;s
            </div>
            {/* <Carousel
              className={'flex relative h-100 w-2/3 sm:w-5/6 mx-auto mt-4'}
            >
              <CarouselContent className={'h-full w-full'}>
                {[sunnyAndTim, evanAndTim].map((image, index) => {
                  return (
                    <CarouselItem
                      key={`photo-${index}`}
                      className={
                        'flex justify-center items-center h-full w-full'
                      }
                    >
                      <Image
                        src={image}
                        alt={'photo'}
                        height={500}
                        width={500}
                        style={{ objectFit: 'contain' }}
                      />
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel> */}
          </div>
        </div>
      </main>
    </div>
  );
}
