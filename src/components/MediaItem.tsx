'use client'

import useLoadImage from '@/hooks/useLoadImage'
import { Song } from '@/types'
import Image from 'next/image'

interface MediaItemProps {
  onClick?: (id: string) => void
  data: Song
}

function MediaItem({ onClick, data }: MediaItemProps) {
  const imageUrl = useLoadImage(data)

  const handleClick = () => {
    if (onClick) {
      return onClick(data.id)
    }
  }

  return (
    <div
      onClick={handleClick}
      className="flex items-center gap-x-3 cursor-pointer hover:bg-neutral-800/50 w-full [-2 rounded-md"
    >
      <div className="relative rounded-md min-h-[48px] min-w-[48px] overflow-hidden">
        <Image
          fill
          src={imageUrl || '/images/liked.png'}
          alt="Image"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-y-1 overflow-hidden">
        <p className="text-white truncate">{data.title}</p>
        <p className="text-neutral-400 text-sm truncate">{data.title}</p>
      </div>
    </div>
  )
}

export default MediaItem
