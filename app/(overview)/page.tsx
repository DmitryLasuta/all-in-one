import { FakeStore } from '@/lib/services/api/fakeStore'
import Image from 'next/image'
import { dockerOne } from '@/app/assets/fonts'

export default async function HomePage() {
  const categories = await new FakeStore().getCategories()

  return (
    <div className="">
      <div className="text-center lg:text-right w-full flex flex-col lg:flex-row items-center gap-4 lg:gap-10">
        <Image
          className="rounded"
          src={categories[0].image}
          alt={categories[0].name}
          width={500}
          height={400}
        />
        <div className="w-full">
          <h1 className={`${dockerOne.className} text-3xl capitalize mb-4 font-bold`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className="text-lg max-w-lg inline-block">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias saepe itaque
            ipsam corrupti excepturi nihil similique blanditiis modi placeat inventore?
          </p>
        </div>
      </div>
    </div>
  )
}
