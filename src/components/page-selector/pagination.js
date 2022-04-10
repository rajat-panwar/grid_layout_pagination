import { useMemo } from "react"

function range (start, stop, step = 1) {
    return Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step))
}

export default function Pagination (total_images, images_per_page, current_page) {
    return useMemo(() => {
        const totalPage = Math.ceil(total_images/images_per_page)
        const totalPageNumbers = 6
        if (totalPageNumbers >= totalPage) {
            return range(1, totalPage);
        }
        const leftSiblingIndex = Math.max(current_page - 1, 1);
        const rightSiblingIndex = Math.min(current_page + 1, images_per_page);
        const shouldShowLeftDots = leftSiblingIndex > 2;
        const shouldShowRightDots = rightSiblingIndex < images_per_page - 2;

        const firstPageIndex = 1;
        const lastPageIndex = totalPage;

        if (!shouldShowLeftDots && shouldShowRightDots) {
            let leftItemCount = 5;
            let leftRange = range(1, leftItemCount);
      
            return [...leftRange, '...', totalPage];
        }

        if (shouldShowLeftDots && shouldShowRightDots) {
            let middleRange = range(leftSiblingIndex, rightSiblingIndex);
            return [firstPageIndex, '...', ...middleRange, '...', lastPageIndex];
        }
        if (shouldShowLeftDots && !shouldShowRightDots) {
            let leftItemCount = 5;
            let rightRange = range(totalPage-5, totalPage);
      
            return [1, '...', ...rightRange];
        }
    }, [total_images, images_per_page, current_page])
}
