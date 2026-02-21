function CardWrapperShimmer({ count = 8 }) {
    return (
        <div className="cardWrapperShimmer flex flex-wrap justify-center gap-7 px-5 py-10">
            {Array.from({ length: count }).map((_, index) => (
                <div key={index} className="shimmerCard w-60 h-70 bg-[#e4e4e4] rounded-2xl" />
            ))}
        </div>
    );
}

export default CardWrapperShimmer;
