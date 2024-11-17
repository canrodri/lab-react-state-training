import { useState } from "react";

function LikeButton({ className = '' }) {
    const [count, setCount] = useState(0);

    const handleCounter = () => {
        setCount(count + 1);
    };

    return (
        <>
            <button type='button' className={`btn btn-secondary btn-lg m-3 ${className}`} onClick={handleCounter}>
                {count} Likes
            </button>
        </>
    );
}

export default LikeButton;