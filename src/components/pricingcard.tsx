import Spline from "@splinetool/react-spline";

interface PricingCardProps {
    title: string;
    description: string;
    price: string;
    splineUrl: string;
    color: string;
}

const PricingCard: React.FC<PricingCardProps> = ({ title, description, price, splineUrl, color }) => {
    return (
        <div className={`text-center bg-white p-8 rounded-md shadow-md border-4 border-${color}`}>
            <div style={{ backgroundColor: color }} className="h-5"></div>
            <h2 className={`text-xl font-semibold mt-5 mb-3 text-${color}`}>{title}</h2>
            <p className="text-gray-500 mb-3">{description}</p>
            <h3 className={`text-xl font-bold mb-3 text-${color}`}>{price}</h3>
            <div className="h-40     mb-3">
                <Spline scene={splineUrl} />
            </div>
            <button style={{ backgroundColor: color }} className={`text-white px-6 py-3 rounded-full hover:bg-${color}-dark`}>Unlock</button>
            <div style={{ backgroundColor: color }} className="h-5 mt-5"></div>
        </div>
    );
};

export default PricingCard;
