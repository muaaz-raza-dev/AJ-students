import React from 'react'
// components/DiarySkeleton.tsx
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const DiarySkeleton = () => {
  return (
    <div className="p-4 rounded-md shadow-md bg-white">
      {/* Title Skeleton */}
      <div className="mb-4">
        <Skeleton height={30} width={`60%`} />
      </div>

      {/* Date Skeleton */}
      <div className="mb-4">
        <Skeleton height={20} width={150} />
      </div>

      {/* Image Skeleton */}
      <div className="mb-4">
        <Skeleton height={200} width={`100%`} />
      </div>

      {/* Content Skeleton */}
      <div className="mb-4">
        <Skeleton count={5} />
      </div>

      {/* Tags Skeleton */}
      <div className="flex space-x-2">
        <Skeleton height={30} width={50} />
        <Skeleton height={30} width={50} />
        <Skeleton height={30} width={50} />
      </div>
    </div>
  );
};

export default DiarySkeleton;
