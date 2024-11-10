import React from 'react';

function Logo() {
    return (
        <div className="flex flex-1 gap-1.5 text-lg font-extrabold">
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2164ddc6fcc1da2f2954ed312acae7b0604a4a98d2ac95452d008c7aa75ed38?placeholderIfAbsent=true&apiKey=75bb59ec28f84040912d0d307b0ae79d"
                alt="PigeonPost logo"
                className="object-contain shrink-0 rounded-none aspect-[1.07] w-[65px]"
            />
        </div>
    );
}

export default Logo;