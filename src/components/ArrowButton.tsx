function ArrowButton({ color, text }: { color: 'white' | 'gray', text: string }) {
    return (
        <button className={`group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full px-6 font-medium text-${color} duration-500  group-hover:border`}>
            <div className="translate-x-0 opacity-100 transition group-hover:-translate-x-[150%] group-hover:opacity-0">{text}</div>
            <div className="absolute translate-x-[150%] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100">                                    
                <img src={`/assets/icons/arrow_right_${color}.svg`} alt="" />
            </div>
        </button>
    );
}

export default ArrowButton;
