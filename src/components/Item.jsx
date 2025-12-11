

export default function Item({ item, selected, onSelect, setFood, soldOut }) {
    const isActive = selected === item.id

    function handleSelect() {
        onSelect(item.id)
        setFood(item)
    }

    return (
        <label
            className={`
                w-full flex items-center gap-4 p-4 mb-3 rounded-xl cursor-pointer 
                transition-all shadow-sm
                ${soldOut 
                    ? "bg-gray-300 text-gray-600 cursor-not-allowed" 
                    : isActive 
                        ? "bg-[#F7418F] text-white" 
                        : "bg-[#FEC7B4] text-[#F7418F]"
                }
            `}
        >

            {/* Radio button (pink), disabled if out of stock */}
            <input
                type="radio"
                name="menu"
                checked={isActive}
                disabled={soldOut}
                onChange={handleSelect}
                className="accent-[#FEC7B4] w-6 h-6"
            />

            {/* Text section */}
            <div className="flex flex-col">
                <span className="text-2xl font-yesteryear">
                    {item.name}
                </span>

                {soldOut ? (
                    <span className="text-sm font-semibold text-red-600">
                        Out of Stock
                    </span>
                ) : (
                    <span className="text-lg opacity-80">
                        {item.price}
                    </span>
                )}
            </div>

        </label>
    );
}

