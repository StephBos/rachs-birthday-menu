import { TbFlower } from "react-icons/tb"

export default function DetailsModal({ details, onClose }) {

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-[#F7418F] rounded-lg p-6 w-11/12 max-w-md relative">
                <button
                    className="absolute top-2 right-2 text-[#FEC7B4] text-3xl hover:text-gray-700"
                    onClick={onClose}
                >
                    <TbFlower />
                </button>
                <h2 className="text-2xl font-bold mb-4 text-[#FEC7B4]">{details.name}</h2>
                <p className="mb-4 bg-[#FC819E] p-2 mr-3 rounded-lg text-[#2A0A1B]">{details.description}</p>
            </div>
        </div>
    )
}