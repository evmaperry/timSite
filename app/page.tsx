import Image from 'next/image';
import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Home() {
  return (
    <div className='flex flex-col flex-1 items-center justify-center '>
      <main className='flex flex-1 w-full max-w-3xl flex-col items-center justify-start gap-y-4 py-16 px-16 sm:items-start'>
        <header className={'mb-6'}>
          <div className={'text-4xl'}>Tim&apos;s Journey</div>
        </header>

        <div className={'entry-post'}>
          <div className={'entry-title-container'}>
            <div className='entry-title-text'>A new chapter</div>
            <div className='entry-subtitle-text'>May 23rd</div>
          </div>

          <div className={'entry-body'}>
            <div>Hello friends and family,</div>
            <div>
              In early May, a series of events unfolded that have led to a new
              phase of care for Tim. He is at home and comfortable, but there
              have been significant changes to his health.
            </div>
            <div>
              About two weeks ago, Tim suffered a brain bleed after a fall. He
              was admitted to Munson and underwent emergency surgery, which
              stopped the bleeding; however, Tim didn&apos;t recover from his
              surgery as we hoped he would. Before his fall he was showing
              symptoms of stage 4 Parkinson&apos;s. His injury has significantly
              exacerbated those symptoms. As of writing, he recognizes us and
              can speak a little, but otherwise is very sleepy and requires
              around-the-clock care.
            </div>
            <div>
              After consulting with medical professionals, we&apos;ve decided to
              adopt a palliative care approach with Tim. We brought Tim home on
              May 22nd and are working with Munson Hospice on an in-home basis.
              This means we will give him comfort care, but not seek further
              medical intervention.
            </div>
            <div>
              Tim was relieved to get home. It will be wonderful for him to
              sleep and wake up in his own bed. We are thrilled to have him
              home. We are hoping that with better sleep, home-cooked meals and
              boat-loads of love his health can improve to some degree.
            </div>
            <div>
              Thank you so, so much for all of the ongoing love and support
              you&apos;ve shown us. We&apos;ll update this space periodically to
              let you know how things are going ❤️
            </div>
            <div>
              With love,
              <br />
              the Perry&apos;s
            </div>
            <Carousel>
              <CarouselContent>
                
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </main>
    </div>
  );
}
