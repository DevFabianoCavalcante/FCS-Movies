import React from 'react';
import * as C from './SkeletonStyle';

type TypeSkeleton = 'standard' | 'mini';

interface SkeletonProps {
    prop: TypeSkeleton;
}

export const Skeleton = ({prop} : SkeletonProps) =>{

    
    return (
        <>
            {prop === 'standard' && (
                <C.SlideSkeleton>
                    <div></div>
                </C.SlideSkeleton>
            )}

            {prop === 'mini' && (
                <C.MiniSlideSkeleton>
                    <div></div>
                </C.MiniSlideSkeleton>
            )}
        </>
    )
}